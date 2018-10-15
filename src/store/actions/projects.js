import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getProjectsData = (projectsArray, selectedProject)=>{
    return{
        type: actionTypes.GET_PROJECTS,
        payload:{
            projects: projectsArray,
            selectedProjectId: selectedProject,
        }
    };
};

export const getProjects =(token, selectedProjectId)=>{
    return dispatch=>{
        axios({
            url:'/projects',
            method: 'get',
            headers:{
                "Authorization": `Token ${token}`,
                "Content-Type": "application/json"
            }
        }).then(res => {
            dispatch(getProjectsData(res.data, selectedProjectId));
        })
        .catch(err => {
            console.log(err, '[IN:Dashboard.js] line:27');
            window.alert(`Error while getting data, ${err}`);
        });
    };
};

export const selectProject=(id)=>{
    return{
        type: actionTypes.SELECT_PROJECT,
        payload:{
            id: id,
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
            dispatch(getProjects(token, res.data.id));
        })
        .catch(err => {
            console.log(err, '[IN:Dashboard.js] line:27');
            window.alert(`Error while saving project, ${err}`);
        });
    };
};

export const updateProject=(id, token, data)=>{
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
            dispatch(getProjects(token, id));
        }).catch(err=>{
            console.log(err, '[updateProject]');
            window.alert(`Error while updating project, ${err}`);
        });
    };
};

export const editProject=()=>{
    return{
        type: actionTypes.EDIT_PROJECT,
    };
};