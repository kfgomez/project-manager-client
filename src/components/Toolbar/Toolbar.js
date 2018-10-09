import React from 'react';
import classes from './Toolbar.css';
import { NavLink } from 'react-router-dom';
import Logo from '../UI/Logo/Logo';
const toolbar =(props)=>{
    return (
    <div className={classes.Toolbar}>
        <nav className={classes.Navigation}>
            <div className={classes.NavigationLogo}>
            <Logo/>
            </div>
            <div className={classes.Spacer}/>
            <div className={classes.NavigationItems}>
                <ul>
                    <li><NavLink 
                    activeStyle={{fontWeight: 'bold'}} 
                    exact to='/reports'>
                    reports</NavLink></li>
                    
                    <li><NavLink 
                    activeStyle={{fontWeight: 'bold'}} 
                    exact to='/dashboard'>
                    dashboard</NavLink></li>
                    
                    <li><NavLink 
                    activeStyle={{fontWeight: 'bold'}} 
                    exact to='/account'>account</NavLink></li>
                    
                    {
                    props.auth
                    ?<li><div
                    className={classes.Logout}
                    onClick={props.logoutHandler}>
                    logout</div></li>
                    :<li><NavLink 
                    activeStyle={{fontWeight: 'bold'}} 
                    exact to='/login'>
                    login</NavLink></li>
                    
                    }
                </ul>
            </div>
        </nav>  
    </div>
    );
};

export default toolbar;