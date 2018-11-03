import React from 'react';
import ProjectForm from '../../../containers/ProjectForm/ProjectForm';
import classes from './EditProject.css';

const editProject=props=>{
    const inputElements=[{
        name: 'title',
        value: props.projectData.title,
        valid: true
    },{
        name: 'description',
        value: props.projectData.description,
        valid: true,
    },{
        name: 'budget',
        value: props.projectData.budget,
        valid: true,
    },{
        name: 'contact_email', 
        value: props.projectData.contact_email,
        valid: true,
    },{
        name: 'contact_name',
        value: props.projectData.contact_name,
        valid: true,
    },{
        name: 'contact_phone',
        value: props.projectData.contact_phone,
        valid: true,
    },{
        name: 'delivery_date',
        value: props.projectData.delivery_date,
        valid: true,
    },{
        name: 'domain',
        value: props.projectData.domain,
        valid: true,
    }];
    return( 
        <div className={classes.FormContainer}>
        <ProjectForm 
        type='edit'
        projectData={inputElements}
        id={props.projectData.id}
        updateProjectHandler={props.updateProjectHandler}
        cancelEditHandler={props.cancelEditHandler}
        />
        </div>
        );
};

export default editProject;