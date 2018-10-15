import axios from 'axios';
import {getProjects} from './projects';

export const updateTask=(projectId,taskId,token,data)=>{
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
            dispatch(getProjects(token, projectId));
        }).catch(err=>{
            window.alert('error in tasks actionTypes: ', err);
        });
    };
};

export const postTask=(projectId,token, data)=>{
    return dispatch=>{
        axios({
            url: `/projects/${projectId}/tasks`,
            method: 'post',
            headers:{
                "Authorization": `Token ${token}`,
                "Content-Type": "application/json"
            },
            data,
        }).then(res=>{
            dispatch(getProjects(token, projectId));
        }).catch(err=>{
            window.alert(`error while posting data ${err}`);
        });
    };
};