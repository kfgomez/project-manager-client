import * as actionTypes from './actionTypes';
import axios from 'axios';
import Auth from '../../modules/Auth';
import { setErrorTrue, setLoadingTrue, setLoadingFalse } from './ui';
import { resetProjects } from './projects';

export const isUserAuthenticated = ()=>{
    return{
        type: actionTypes.IS_USER_AUTH,
    };
};

export const logout = () =>{
    Auth.deauthenticateUser();
    return{
        type: actionTypes.IS_USER_AUTH,
    };
};

export const deauthenticateUser = ()=>{
    return dispatch=>{
        dispatch(setLoadingTrue());
        const token = Auth.getToken();
        axios({
                method: 'delete',
                url: '/logout',
                headers:{
                    "Authorization": `Token ${token}`,
                    "Content-Type": "application/json"}
            }).then(res =>{
                dispatch(setLoadingFalse());
                window.alert('logged out');
                dispatch(resetProjects());
                dispatch(logout());
            }).catch(err => 
            dispatch(setErrorTrue(err, 'Please refresh the page or try again later'))
        );
    };
};

export const authenticateUser = (data)=>{
    return dispatch=>{
        dispatch(setLoadingTrue());
        axios.post('/login', data)
        .then(res=>{
            const token = res.data.token;
            Auth.authenticateToken(token);
            dispatch(isUserAuthenticated());
        })
        .catch(err=>{
            dispatch(setErrorTrue(err, "Please check your logging information"));
        });
    };
};