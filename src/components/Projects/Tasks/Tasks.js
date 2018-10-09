import React from 'react';
import classes from './Tasks.css';
import Task from './Task/Task';

const tasks = (props) =>{
    const tasks = props.data.map(task=>{
        return(
            <Task 
            task={task} 
            key={task.id}
            selectItemHandler={props.selectItemHandler}
            />
            );
    });
    return(
        <div className={classes.TasksPanel}>
        <div><b>Features</b> </div>
        <div className={classes.TasksWrapper}>
        <table>
        <tbody>
            <tr>
                <th className={classes.Header}>Description</th>
                <th className={classes.Header}>Status</th>
            </tr>
        {tasks}
        </tbody>
        </table>
        </div>
        </div>
        );
};

export default tasks;
