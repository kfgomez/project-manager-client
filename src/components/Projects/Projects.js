import React from 'react';
import Project from './Project/Project';
import classes from './Projects.css';
import ProjectIcon from '../UI/Icons/Project';
import Pagination from './Pagination/Pagination';

const Projects =(props)=>{
    let component = <div className={classes.NoProjectsCreated}>No projects created yet :'(</div>
    let paginationComponent=null;
    if(props.projects.length !== 0){
        component = props.projects.map((project)=>{
        return(
            <Project
            id={project.id}
            key={project.id}
            title={project.title}
            status={project.status.split('_').join(' ')}
            description={project.description}
            delivery_date={project.delivery_date}
            selectProjectHandler={props.selectProjectHandler}
            selectedProjectId={props.selectedProjectId}
            />);
        });
        paginationComponent=<Pagination 
                currentPage={props.currentPage}
                getNextPage={props.getNextPage}
                pages={props.pages}/>;
    }
        return(
            <div className={classes.ProjectsPanel}>
                <div 
                className={classes.OptionBar}>
                    <div className={classes.DashboardIcon}>
                        <ProjectIcon
                        />
                    </div>
                    <div className={classes.New} 
                    onClick={props.newProjectHandler}>create</div>
                </div>
                
                <div className={classes.ProjectsWrapper}>
                <strong>Projects</strong>
                <div className={classes.Pagination}>
                {paginationComponent}</div>
                <div className={classes.ComponentWrapper}>
                    {component}
                </div>
                </div>
                
            </div>
            );
};

export default Projects;