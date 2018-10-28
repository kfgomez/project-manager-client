import {getProjects} from './projects';
import axios from 'axios';

export const postActivity=(projectId, token, data, page)=>{
    return dispatch=>{
        axios({
            url: `/projects/${projectId}/activities`,
            method: 'post',
            headers:{
                "Authorization": `Token ${token}`,
                "Content-Type": "application/json"
            },
            data})
            .then(res=>{
                dispatch(getProjects(token, projectId, page));
            })
            .catch(err=>{
                window.alert(err);
            });
    };
};