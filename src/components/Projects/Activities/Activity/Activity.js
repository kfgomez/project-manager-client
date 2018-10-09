import React from 'react';
import classes from './Activity.css';

const activity = props =>{
    const activity = props.activity;
    const fullDate= [activity.created_at.slice(0,10),'at:', activity.created_at.slice(11,16)].join(' ');
    return(
        <tr 
        onClick={(id, type)=>props.selectItemHandler(activity.id, 'activity')}>
        <td 
        className={classes.Data}
        >{activity.description}</td>
        <td 
        className={classes.Data}
        >
        {fullDate}</td>
        </tr>
        );
};

export default activity;