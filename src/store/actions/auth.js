import * as actionTypes from './actionTypes';
import axios from 'axios';
import Auth from '../../modules/Auth';

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
                window.alert('logged out')
                dispatch(logout());
            }).catch(err => console.log(err)
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
            window.alert('unable to authenticate', err);
        });
    };
};