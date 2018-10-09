import React from 'react';
import classes from './FullProject.css';
import NewProject from '../NewProject/NewProject';
import EditProject from '../EditProject/EditProject';
import StatusMenu from './StatusMenu/StatusMenu';

const fullProject = (props)=>{
    let component;
    let project;
    switch (props.projectAction) {
        case 'new':
            component = <NewProject 
            submitProjectHandler={props.submitProjectHandler}
            />;
            break;
        case 'edit':
            project= props.projectData;
            component = <EditProject 
            updateProjectHandler={props.updateProjectHandler}
            projectData={props.projectData}
            selectProjectHandler={props.selectProjectHandler}/>;
            break;
        case 'show':
            project= props.projectData;
            component = 
            <div>
                <div className={classes.CodePanel}>share <code>
                ADD_CODE_TO_SERIALIZER</code>
                </div>
                <div 
                className={classes.Edit}
                onClick={props.editProjectHandler}>Edit</div>
                <div className={classes.ProjectTitle}>{project.title}</div>
                <div className={classes.Customer}>addCustomerToModel.com</div>
                <div className={classes.Description}>{project.description}</div>
                <StatusMenu 
                value={project.status}
                updateStatusHandler={props.updateStatusHandler}/>
                <table className={classes.DatesTable}>
                <tbody>
                  <tr>
                    <td>Date Created</td>
                    <td>01/05/2018</td>
                  </tr>
                  <tr>
                    <td>Delivery Date</td>
                    <td>{project.delivery_date}</td>
                  </tr>
                  </tbody>
                </table>
            </div>;
        break;
        default:
            component = <NewProject 
            submitProjectHandler={props.submitProjectHandler}
            />;
            break;
    }
    
    
        return(
            <div className={classes.Panel}>
            {component}
            </div>
        );
};

export default fullProject;