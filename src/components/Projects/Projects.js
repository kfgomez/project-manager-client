import React from 'react';
import Project from './Project/Project';
import classes from './Projects.css';
import ProjectIcon from '../UI/Icons/Project';

const Projects =(props)=>{
    let component = null;
    props.projects.length === 0
    ?component = <div className={classes.NoProjectsCreated}>No projects created yet :'(</div>
    :component = props.projects.map((project)=>{
        return(
            <Project
            id={project.id}
            key={project.id}
            title={project.title}
            status={project.status}
            description={project.description}
            delivery_date={project.delivery_date}
            selectProjectHandler={props.selectProjectHandler}
            selectedProjectId={props.selectedProjectId}
            />
            );
    });
        return(
            <div className={classes.ProjectsPanel}>
                <div 
                className={classes.OptionBar}>
                    <div className={classes.DashboardIcon}>
                        <ProjectIcon
                        />
                    </div>
                    <div className={classes.New} 
                    onClick={props.newProjectHandler}>Create</div>
                </div>
                <div className={classes.Title}>Projects</div>
                <div 
                className={classes.ProjectsWrapper}>
                {component}</div>
            </div>
            );
};

export default Projects;