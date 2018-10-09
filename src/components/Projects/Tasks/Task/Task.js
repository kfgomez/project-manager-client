import React from 'react';
import classes from './Task.css';
const task = props=>{
    return(
            <tr onClick={(id, type)=>props.selectItemHandler(props.task.id, 'task')}>
                <td
                className={classes.Data}>{props.task.description}</td>
                <td
                className={classes.Data}>{props.task.status}</td>
            </tr>
    );
};

export default task; 