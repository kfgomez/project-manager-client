import React, { Component } from 'react';
import classes from './ActivityForm.css';

class ActivityForm extends Component{
    state={
        description: '',
        time_spent: 0,
    }
    changeHandler=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }
    submitFormHandler=(e, state)=>{
        e.preventDefault();
        this.props.postActivityHandler(e, state);
        this.setState({
            description:'',
            time_spent: 0,
        });
        
    }
    render(){
        return(
            <div className={classes.FormPanel}>
                <form onSubmit={(e, state)=>this.submitFormHandler(e, this.state)}>
                    <textarea 
                    rows="3" 
                    cols="32" 
                    placeholder="description"
                    value={this.state.description}
                    onChange={this.changeHandler}
                    name="description"/>
                    <input 
                    type="number" 
                    placeholder="time spent"
                    value={this.state.time_spent}
                    onChange={(e)=>this.changeHandler(e)}
                    name="time_spent"/>
                    <input type="submit" value="add"
                    className={classes.SubmitButton}/>
                </form>
            </div>
            );
    }
}

export default ActivityForm;