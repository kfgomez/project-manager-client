import React from 'react';
import Form from '../../containers/LoginForm/LoginForm';
import classes from './Login.css';
const login = (props) =>{
    return(
        <div className={classes.LoginPanel}>
        <div className={classes.ToolbarSpacer}/>
            <div className={classes.LoginWrapper}>
                <h1>Login</h1>
                <Form 
                loginHandler={props.loginHandler}/>
            </div>
        </div>
        );
};

export default login;