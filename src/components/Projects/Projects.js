import React from 'react';
import Project from './Project/Project';
import classes from './Projects.css';

const Projects =(props)=>{
    const projects = props.projects.map((project)=>{
        return( 
            <Project
            project={project}
            key={project.id}
            selectProjectHandler={props.selectProjectHandler}
            />
            );
    });
        return(
            <div className={classes.Main}>
                <div className={classes.Nav}>
                <div className={classes.Title}>
                Projects
                </div>
                <div className={classes.New} 
                onClick={props.newProjectHandler}>Create</div>
                </div>
                <div className={classes.ProjectsWrapper}>
                {projects}</div>
            </div>
            );
};

export default Projects;