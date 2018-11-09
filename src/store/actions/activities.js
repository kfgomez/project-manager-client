import {getProjects, getProject} from './projects';
import axios from 'axios';
import { setErrorTrue, setLoadingTrue, setLoadingFalse } from './ui';

export const postActivity=(projectId, token, data, page)=>{
    return dispatch=>{
        dispatch(setLoadingTrue());
        axios({
            url: `/projects/${projectId}/activities`,
            method: 'post',
            headers:{
                "Authorization": `Token ${token}`,
                "Content-Type": "application/json"
            },
            data})
            .then(res=>{
                dispatch(setLoadingFalse());
                dispatch(getProject(token, projectId));
                dispatch(getProjects(token, projectId, page));
            })
            .catch(err=>{
                dispatch(setErrorTrue(err, "Contact support@redcarats.com if the issue persists"));
            });
    };
};