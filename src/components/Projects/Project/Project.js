import React from 'react';
import classes from './Project.css';
const project =props=>{
    let statusClass;
    let date=new Date(props.delivery_date);
    
    switch (props.status) {
        case 'open':
            statusClass=[classes.Status, classes.Open].join(' ');
            break;
        case 'in_progress':
            statusClass=[classes.Status, classes.InProgress].join(' ');
            break;
        case 'completed':
            statusClass=[classes.Status, classes.Completed].join(' ');
            break;
        case 'canceled':
            statusClass=[classes.Status, classes.Canceled].join(' ');
            break;
        case 'delivered':
            statusClass=[classes.Status, classes.Delivered].join(' ');
            break;
        case 'hold':
            statusClass=[classes.Status, classes.Hold].join(' ');
            break;
        default:
            statusClass=classes.Status;
    }
    return(
        <div 
        className={props.selectedProjectId === props.id
            ? [classes.Project, classes.ProjectSelected].join(' ')
            : classes.Project 
        }
        onClick={(id)=>props.selectProjectHandler(props.id)}>
        <div className={classes.Delivery}>
        {date.toDateString()}</div>
        <div className={statusClass}>
        {props.status}</div>
        <br/>
        <div className={classes.Title}>
        {props.title}</div>
        <div className={classes.Description}>
        {
            props.description.slice(0, (props.description.length/2))
        }
        ....</div>
        </div>
        );
};

export default project;