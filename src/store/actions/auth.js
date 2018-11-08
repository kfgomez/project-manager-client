import * as actionTypes from './actionTypes';
import axios from 'axios';
import Auth from '../../modules/Auth';
import { setErrorTrue } from './ui';
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
        const token = Auth.getToken();
        axios({
                method: 'delete',
                url: '/logout',
                headers:{
                    "Authorization": `Token ${token}`,
                    "Content-Type": "application/json"}
            }).then(res =>{
                window.alert('logged out');
                dispatch(resetProjects());
                dispatch(logout());
            }).catch(err => dispatch(setErrorTrue(err))
        );
    };
};

export const authenticateUser = (data)=>{
    return dispatch=>{
        axios.post('/login', data)
        .then(res=>{
            const token = res.data.token;
            Auth.authenticateToken(token);
            dispatch(isUserAuthenticated());
        })
        .catch(err=>{
            dispatch(setErrorTrue(err));
        });
    };
};