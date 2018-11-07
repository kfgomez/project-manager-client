import React from 'react';
import classes from './Activities.css';
import Activity from './Activity/Activity';
import ActivityForm from '../../../containers/ActivityForm/ActivityForm';
const activities=(props)=>{
    const activities=props.data.map(activity=>{
        return(
            <Activity 
            activity={activity}
            key={activity.id}/>
            );
    });
    return(
        <div className={classes.ActivitiesPanel}>
        <h2 className={classes.Title}>Activities</h2>
        <div className={classes.TableWrapper}>
        <table className={classes.Table}>
        <tbody>
            <tr className={classes.HeadElements}>
            <th>created_at</th>
            <th>description</th>
            <th>time spent min.</th>
            <th>user</th>
            </tr>
            {activities}
        </tbody>
        </table>
        </div>
        <ActivityForm 
        postActivityHandler={props.postActivityHandler}/>
        </div>
        );
};

export default activities;