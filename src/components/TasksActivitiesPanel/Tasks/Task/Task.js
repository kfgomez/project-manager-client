import React from 'react';
import StatusMenu from './StatusMenu/StatusMenu';
const task=(props)=>{
    return(
    <tr>
        <td>
        {props.task.description}
        </td>
        
        <td>
        {props.task.source}
        </td>
        
        <td>
        {props.task.difficulty}
        </td>
        
        <td>
        <StatusMenu
        value={props.task.status}
        upateTaskHandler={props.updateTaskHandler}
        id={props.task.id}/>
        </td>
    </tr>
    );
};

export default task;