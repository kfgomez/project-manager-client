import React from 'react';
import classes from './NewProject.css';
import ProjectForm from '../../../containers/ProjectForm/ProjectForm';
const newProject=(props)=>{
    return(
        <div className={classes.FormPanel}>
        <ProjectForm 
        type='new'
        submitProjectHandler={props.submitProjectHandler}
        />
        </div>
        );
};

export default newProject;