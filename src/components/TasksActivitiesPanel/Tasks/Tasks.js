import React from 'react';
import classes from './Tasks.css';
import Task from './Task/Task';
import TaskForm from '../../../containers/TaskForm/TaskForm';

const tasks=(props)=>{
    const tasks = props.data.map(task=>{
        return(
            <Task 
            key={task.id}
            task={task}
            updateTaskHandler={props.updateTaskHandler}/>
            );
    });
    return(
        <div>
        <h2 className={classes.Title}>Tasks</h2>
        <div className={classes.TableWrapper}>
        <table className={classes.Table}>
        <tbody>
            <tr className={classes.HeadElements}>
            <th>description</th>
            <th>source</th>
            <th>difficulty</th>
            <th>status</th>
            </tr>
            {tasks}
        </tbody>
        </table>
        </div>
        <TaskForm 
        postTaskHandler={props.postTaskHandler}/>
        </div>
        );
};

export default tasks;