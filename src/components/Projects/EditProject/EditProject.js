import React from 'react';
import ProjectForm from '../../../containers/ProjectForm/ProjectForm';
const editProject=props=>{
    const inputElements=[{
        name: 'title',
        value: props.projectData.title
    },{
        name: 'description',
        value: props.projectData.description,
    },{
        name: 'budget',
        value: props.projectData.budget,
    },{
        name: 'contact_email', 
        value: props.projectData.contact_email,
    },{
        name: 'contact_name',
        value: props.projectData.contact_name,
    },{
        name: 'contact_phone',
        value: props.projectData.contact_phone
    },{
        name: 'delivery_date',
        value: props.projectData.delivery_date,
    }];
    return( 
        <div>
        <ProjectForm 
        type='edit'
        projectData={inputElements}
        id={props.projectData.id}
        updateProjectHandler={props.updateProjectHandler}
        selectProjectHandler={props.selectProjectHandler}
        />
        </div>
        );
};

export default editProject;