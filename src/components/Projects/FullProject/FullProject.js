import React from 'react';
import classes from './FullProject.css'
import NewProject from '../NewProject/NewProject'
const fullProject = (props)=>{
    if(props.project){
        const project = props.project;
        return(
            <div 
            className={classes.Panel}>
            Title:{project.title}</div>);
    }else{
        return(
            <div
            className={classes.Panel}>
            <NewProject/>
            </div>);
    }
};

export default fullProject;