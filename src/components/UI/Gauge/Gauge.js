import React from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const gauge=(props)=>{
    return(
        <Progress 
        percent={props.percentageCompleted}
        type="circle"/>
        );
};


export default gauge;