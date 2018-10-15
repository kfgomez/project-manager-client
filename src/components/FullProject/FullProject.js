import React from 'react';
import classes from './FullProject.css';
import NewProject from './NewProject/NewProject';
import EditProject from './EditProject/EditProject';
import StatusMenu from './StatusMenu/StatusMenu';
import Gauge from '../UI/Gauge/Gauge';
import ContactCard from './ContactCard/ContactCard';
import Metrics from './Metrics/Metrics';

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
            const dateCreated = project.created_at.slice(0, 10);
            const updatedAt = project.updated_at.slice(0, 10);
            component = 
            <div>
                <div className={classes.CodePanel}>share <code>
                {project.code}</code>
                </div>
                <div 
                className={classes.Edit}
                onClick={props.editProjectHandler}>edit</div>
                <div className={classes.ProjectTitle}>{project.title}</div>
                <div className={classes.Customer}>{project.domain}</div>
                <div className={classes.Description}>{project.description}</div>
                <StatusMenu 
                value={project.status}
                updateStatusHandler={props.updateStatusHandler}/>
                <ContactCard 
                contactName={project.contact_name}
                contactPhone={project.contact_phone}
                contactEmail={project.contact_email}/>
                <table className={classes.DatesTable}>
                <tbody>
                  <tr>
                    <td>Date Created</td>
                    <td>{dateCreated}</td>
                  </tr>
                  <tr>
                    <td>Delivery Date</td>
                    <td>{project.delivery_date}</td>
                  </tr>
                  <tr>
                    <td>Last Update</td>
                    <td>{updatedAt}</td>
                  </tr>
                  </tbody>
                </table>
                
                <div className={classes.GaugePanel}>
                <div className={classes.Gauge}>
                <Gauge
                percentageCompleted={project.percentage_completed}/>
                </div>
                </div>
                <Metrics 
                renderPanelDataHandler={props.renderPanelDataHandler}
                points={project.points}
                budget={project.budget}
                time_spent={project.time_spent}
                totalTasks={project.tasks.length}
                totalActivities={project.activities.length}/>
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