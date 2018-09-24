import React from 'react';
import Form from '../../containers/Form/Form';
import classes from './Login.css'
const login = (props) =>{
    return(
        <div className={classes.Login}>
        <h1>Login</h1>
        <Form loginHandler={(e, data)=>props.loginHandler(e, data)}/>
        </div>
        )
}

export default login;