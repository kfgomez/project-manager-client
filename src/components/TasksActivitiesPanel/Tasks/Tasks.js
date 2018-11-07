import React, { Component } from 'react';
import classes from './Tasks.css';
import Task from './Task/Task';
import TaskForm from '../../../containers/TaskForm/TaskForm';

const tasks=(props)=>{
    const tasks = props.data.map(task=>{
        return(
            <Task 
            key={task.id}
            task={task}
            updateTaskHandler={props.updateTaskHandler}
            selectTaskHandler={props.selectTaskHandler}
            deleteTaskHandler={props.deleteTaskHandler}/>
            );
    });
    return(
        <div className={classes.TasksPanel}>
        <h2 className={classes.Title}>Tasks</h2>
        <div className={classes.TableWrapper}>
        <table className={classes.Table}>
        <tbody>
            <tr className={classes.HeadElements}>
            <th>description</th>
            <th>source</th>
            <th>difficulty</th>
            <th>status</th>
            <th> </th>
            </tr>
            {tasks}
        </tbody>
        </table>
        </div>
        <TaskForm 
        type={props.taskFormType}
        task={props.selectedTaskData}
        resetTaskAction={props.resetTaskAction}
        postTaskHandler={props.postTaskHandler}
        updateTaskHandler={props.updateTaskHandler}/>
        </div>
        );
};

export default tasks;