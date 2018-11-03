import axios from 'axios';
import {getProjects, getProject} from './projects';

export const updateTask=(projectId,taskId,token,data, page)=>{
    return dispatch=>{
        axios({
            url: `/projects/${projectId}/tasks/${taskId}`,
            method: 'put',
            headers:{
                "Authorization": `Token ${token}`,
                "Content-Type": "application/json"
            },
            data,
        }).then(res=>{
            dispatch(getProject(token, projectId));
            dispatch(getProjects(token, projectId, page));
        }).catch(err=>{
            window.alert('error in tasks actionTypes: ', err);
        });
    };
};

export const postTask=(projectId,token, data, page)=>{
    return dispatch=>{
        axios({
            url: `/projects/${projectId}/tasks`,
            method: 'post',
            headers:{
                "Authorization": `Token ${token}`,
                "Content-Type": "application/json"
            },
            params: data,
        }).then(res=>{
            dispatch(getProject(token, projectId));
            dispatch(getProjects(token, projectId, page));
        }).catch(err=>{
            window.alert(`error while posting data ${err}`);
        });
    };
};
export const deleteTask=(id, projectId, token, page)=>{
    return dispatch=>{
        axios({
            url: `/projects/${projectId}/tasks/${id}`,
            method: 'delete',
            headers:{
                "Authorization": `Token ${token}`,
                "Content-Type": "application/json"
            }
        }).then(res=>{
            dispatch(getProject(token, projectId));
            dispatch(getProjects(token, projectId, page));
        }).catch(err=>{
            window.alert(err);
        });
    };
};