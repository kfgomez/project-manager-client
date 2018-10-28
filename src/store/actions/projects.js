import * as actionTypes from './actionTypes';
import axios from 'axios';

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
    return dispatch=>axios({
        url:'/projects/projects_length',
        method: 'get',
        headers:{
                "Authorization": `Token ${token}`,
                "Content-Type": "application/json"
        }
    }).then(res=>{
        dispatch(projectsLength(res.data));
    }).catch(err=>{
        window.alert(err);
    });
};

export const getProjects =(token, selectedProjectId, currentPage)=>{
    return dispatch=>{
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
        })
        .catch(err => {
            console.log(err, '[IN:Dashboard.js] line:27');
            window.alert(`Error while getting data, ${err}`);
        });
    };
};

export const selectProject=(id, projectData)=>{
    console.log("actions:",id, projectData);
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


export const postProject=(token, data)=>{
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
            dispatch(getProjects(token, res.data.id, 1));
        })
        .catch(err => {
            console.log(err, '[IN:Dashboard.js] line:27');
            window.alert(`Error while saving project, ${err}`);
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
            window.alert(`Error while updating project, ${err}`);
        });
    };
};

export const updateProjectData=(projectData)=>{
    console.log(projectData);
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
