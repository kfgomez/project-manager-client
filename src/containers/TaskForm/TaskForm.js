import React, {Component} from 'react';
import classes from './TaskForm.css';

class TaskForm extends Component{
    state={
        description:'',
        source:'',
        difficulty: 0,
        status:'',
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
        const taskData={
            ...state,
            status: 'open',
        };
        this.props.postTaskHandler(e, taskData);
        this.setState({
            description:'',
            source:'',
            difficulty: 0,
            status:'',
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
                    type="text" 
                    placeholder="source"
                    value={this.state.source}
                    onChange={(e)=>this.changeHandler(e)}
                    name="source"/>
                    
                    <input 
                    type="number" 
                    placeholder="difficulty"
                    value={this.state.difficulty}
                    onChange={(e)=>this.changeHandler(e)}
                    name="difficulty"/>
                    
                    <input type="submit" value="add"
                    className={classes.SubmitButton}/>
                </form>
            </div>
            );
    }
}

export default TaskForm;