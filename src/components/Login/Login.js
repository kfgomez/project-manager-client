import React from 'react';
import Form from '../../containers/LoginForm/LoginForm';
import classes from './Login.css';
const login = (props) =>{
    return(
        <div className={classes.login_panel}>
        <div>
        <h1 className="title">Login</h1>
        <Form 
        loginHandler={props.loginHandler}/>
        </div>
        </div>
        );
};

export default login;