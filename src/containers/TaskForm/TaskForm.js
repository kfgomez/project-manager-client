import React, {Component} from 'react';
import classes from './TaskForm.css';

class TaskForm extends Component{
    state={
        description:'',
        source:'',
        difficulty: 0,
        status:'',
        id: 0,
        formType:'new',
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
        if(this.state.formType==='new'){
            const taskData={
                description: state.description, 
                source: state.source,
                difficulty: state.difficulty,
                status: 'open',
            };
            this.props.postTaskHandler(taskData);
            this.setState({
                description: '',
                source: '',
                difficulty: '',
                status: '',
                id: '',
            });
        }else if(this.state.formType==='edit'){
            const taskData={
                description: state.description,
                source: state.source,
                difficulty: state.difficulty,
                status: state.status,
            };
            this.props.updateTaskHandler(taskData, state.id);
        }
        this.cancelEditTaskHandler();
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevState.formType!==this.props.type || prevProps.task.id !==this.props.task.id){
            this.setState({
                formType: this.props.type,
                difficulty: this.props.task.difficulty,
                description: this.props.task.description,
                source: this.props.task.source,
                status: this.props.task.status,
                id: this.props.task.id
            });
        }
    }
    cancelEditTaskHandler=()=>{
        this.props.resetTaskAction();
    }
    render(){
        let cancel=null;
        if (this.state.formType==='edit'){
            cancel=
            <button 
            type="cancel"
            onClick={this.cancelEditTaskHandler}>
            Cancel</button>;
        }
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
                    
                    <input 
                    type="submit" 
                    value={this.state.formType ==='new'
                        ? "add"
                        : "save"
                    }
                    className={classes.SubmitButton}/>
                </form>
                {cancel}
            </div>
            );
    }
}

export default TaskForm;