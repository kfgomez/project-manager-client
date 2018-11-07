import * as actionTypes from './actionTypes';
import axios from 'axios';
import {
    setLoadingTrue,
    setLoadingFalse,
    setErrorTrue,
} from './ui';

export const getProjectsData = (projectsArray, selectedProject,page)=>{
    return{
        type: actionTypes.GET_PROJECTS,
        payload:{
            projects: projectsArray,
            selectedProjectId: selectedProject,
            currentPage: page,
        }
    };
};

export const projectsLength=(len)=>{
    return{
        type: actionTypes.GET_PROJECTS_LENGTH,
        payload:{
            projectsLength: len
        }
    };
};

export const getProjectsLength=(token)=>{
    return dispatch=>
        axios({
        url:'/projects/projects_length',
        method: 'get',
        headers:{
                "Authorization": `Token ${token}`,
                "Content-Type": "application/json"
        }
    }).then(res=>{
        dispatch(projectsLength(res.data));
    }).catch(err=>{
        dispatch(setErrorTrue(err));
    });
};

export const getProjects =(token, selectedProjectId, currentPage)=>{
    return dispatch=>{
        dispatch(setLoadingTrue());
        axios({
            url:'/projects',
            method: 'get',
            headers:{
                "Authorization": `Token ${token}`,
                "Content-Type": "application/json"
            },
            params:{page: currentPage}
        }).then(res => {
            dispatch(getProjectsData(
                res.data, 
                selectedProjectId,
                currentPage));
            dispatch(setLoadingFalse());
        })
        .catch(err => {
            dispatch(setErrorTrue(err));
            dispatch(setLoadingFalse);
        });
    };
};

export const selectProject=(id, projectData)=>{
    return{
        type: actionTypes.SELECT_PROJECT,
        payload:{
            id: id,
            projectData: projectData
        }
    };
};

export const newProject=()=>{
    return{
        type: actionTypes.NEW
    };
};


export const postProject=(token, data, page)=>{
    return dispatch=>{
        axios({
            url:'/projects',
            method: 'post',
            headers:{
                "Authorization": `Token ${token}`,
                "Content-Type": "application/json"
            },
            params:data
        }).then(res => {
            dispatch(getProjectsLength(token));
            dispatch(updateProjectData(res.data));
            dispatch(getProjects(token, res.data.id, page));
        })
        .catch(err => {
            console.log(err, '[IN:Dashboard.js] line:27');
            dispatch(setErrorTrue(err));
        });
    };
};
export const getProject=(token, id)=>{
    return dispatch=>{
        axios({
            url:`/projects/${id}`,
            method: 'get',
            headers:{
                "Authorization": `Token ${token}`,
                "Content-Type": "application/json",
            }
        }).then(res=>{
            dispatch(updateProjectData(res.data));
        }).catch(err=>{
            dispatch(setErrorTrue(err));
        });
    };
};
export const updateProject=(id, token, data, page)=>{
    return dispatch=>{
        axios({
            url: `/projects/${id}`,
            method: 'put',
            headers:{
                "Authorization": `Token ${token}`,
                "Content-Type": "application/json"
            },
            data
        }).then(res =>{
            dispatch(updateProjectData(res.data));
            dispatch(getProjects(token, id, page));
        }).catch(err=>{
            console.log(err, '[updateProject]');
            dispatch(setErrorTrue(err));
        });
    };
};

export const updateProjectData=(projectData)=>{
    return {
        type: actionTypes.UPDATE_PROJECT_DATA,
        payload:{
            updatedProject: projectData,
        }
    };
};

export const editProject=()=>{
    return{
        type: actionTypes.EDIT_PROJECT,
    };
};