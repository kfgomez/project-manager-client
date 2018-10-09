import React from 'react';
import classes from './Activities.css';
import Activity from './Activity/Activity';

const activities = props =>{
    const activities = props.data.map((activity)=>{
        return(
            <Activity 
            activity={activity}
            key={activity.id}
            selectItemHandler={props.selectItemHandler}
            />
            );
    });
    return(
        <div className={classes.ActivitiesPanel}>
        <b>Activities</b>
        <div 
        className={classes.AcitivitiesWrapper}>
        <table className={classes.ActivitiesTable}>
        <tbody>
            <tr>
                <th className={classes.Header}>Comment</th>
                <th className={classes.Header}>Date</th>
            </tr>
        {activities}
        </tbody>
        </table>
        </div>
        </div>
        );
};

export default activities;