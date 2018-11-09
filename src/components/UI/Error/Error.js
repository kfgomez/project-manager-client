import React from 'react';
import classes from './Error.css';
import Backdrop from '../Backdrop/Backdrop';

const error=(props)=>{
    let message='please try again later or contact support@redcarats.com';
    if(props.nextStep){
        message=props.nextStep;
    }
    return(
    <div>
    <Backdrop toggleBackdropHandler={props.clicked}/>
    <div className={classes.ErrorWrapper}>
    <h3>{props.error.message}</h3>
    <p>{message}</p>
    <div 
    onClick={props.clicked}
    className={classes.OK}>OK</div>
    </div>
    </div>);
};

export default error;