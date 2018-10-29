import React from 'react';
import StatusMenu from './StatusMenu/StatusMenu';
import classes from './Task.css';

const task=(props)=>{
    const taskData={
        description: props.task.description,
        source: props.task.source,
        difficulty: props.task.difficulty,
        status: props.task.status,
        id: props.task.id
    };
    return(
    <tr 
    onClick={(data)=>props.selectTaskHandler(taskData)}
    className={classes.DataRow}>
        <td>
        {taskData.description}
        </td>
        
        <td>
        {taskData.source}
        </td>
        
        <td>
        {taskData.difficulty}
        </td>
        
        <td>
        <StatusMenu
        value={taskData.status}
        upateTaskHandler={props.updateTaskHandler}
        id={taskData.id}/>
        </td>
    </tr>
    );
};

export default task;