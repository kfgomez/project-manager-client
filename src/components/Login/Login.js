import React from 'react';
import Form from '../../containers/LoginForm/LoginForm';
import classes from './Login.css';
const login = (props) =>{
    return(
        <div className={classes.LoginPanel}>
        <div>
        <h1 className={classes.Title}>Login</h1>
        <Form 
        loginHandler={props.loginHandler}/>
        </div>
        </div>
        );
};

export default login;