import React, {Component} from 'react';
import classes from './FullActivity.css';

class FullActivity extends Component{
    render(){
        console.log(this.props.data)
        const activity = this.props.data.item;
        return(
            <div className={classes.ActivityPanel}>
                <div className={classes.Description}>
                Description: {activity.description}</div>
                <div className={classes.Description}>
                Time Spent: {activity.time_spent}</div>
                <div className={classes.Description}>
                At: {activity.created_at}</div>
            </div>
            );
    }
}

export default FullActivity;

