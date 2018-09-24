import React from 'react';
import classes from './Project.css'
const project =props=>{
    const project = props.project;
    return(
        <div 
        className={classes.Project}
        onClick={(id)=>props.selectProjectHandler(project.id)}>
        <div className={classes.Title}>
        <b>Title:</b> 
        {props.project.title}</div>
        <div className={classes.Points}>
        <b>Points:</b> {project.points}</div>
        <br/>
        <div className={classes.Description}><b>Description:</b>
        {
            project.description.slice(0, (project.description.length/2))
        }
        ....</div>
        <div className={classes.Delivery}><b>Delivery Date:</b> {project.delivery_date}</div>
        </div>
        );
};

export default project;