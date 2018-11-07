import React from 'react';
import classes from './Error.css';
import Backdrop from '../Backdrop/Backdrop';

const error=(props)=>{
    return(
    <div>
    <Backdrop />
    <div className={classes.ErrorWrapper}>
    <h3>{props.error.message}</h3>
    <p>Please try again later or contact support@redcarats.com</p>
    <div 
    onClick={props.clicked}
    className={classes.OK}>OK</div>
    </div>
    </div>);
};

export default error;