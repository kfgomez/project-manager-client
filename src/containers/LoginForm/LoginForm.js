import React, { Component } from 'react';
import classes from './LoginForm.css';

class Form extends Component{
    state={
        email: '',
        password: ''
    }
    
    changeHandler =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    render(){
        return(
        <div className={classes.Form}>
        <form onSubmit={(e, data)=>this.props.loginHandler(e, this.state)}>
        <input 
        className={classes.EmailInput}
        type="email" 
        name="email" 
        value={this.state.email}
        placeholder="email"
        onChange={(e)=>this.changeHandler(e)}/>
        <br/>
        <input 
        className={classes.PasswordInput}
        type="password" 
        name="password" 
        value={this.state.password}
        placeholder="password"
        onChange={(e)=>this.changeHandler(e)}/>
        <br/>
        <input 
        className={classes.SubmitInput}
        type="submit" value="submit"/>
        </form>
        </div>);
    }
}

export default Form;