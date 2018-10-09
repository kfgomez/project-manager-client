import React, {Component} from 'react';
import classes from './FullTask.css';

class FullTask extends Component{
    state={
        edit: false, 
    }
    render(){
        console.log(this.props.data)
        const item = this.props.data.item;
        return (
        <div className={classes.TaskPanel}>
            <div className={classes.Description}>
            Description: {item.description}</div>
            <div className={classes.Difficulty}>
            Difficulty: {item.difficulty}</div>
            <div className={classes.Difficulty}>
            Source: {item.source}</div>
            <div className={classes.Status}>
            Status: {item.status}</div>
        </div>
        );
    }
}

export default FullTask;