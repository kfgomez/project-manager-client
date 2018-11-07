import React from 'react';
import classes from './SideDrawer.css';
import { NavLink } from 'react-router-dom';

const sideDrawer =(props)=>{
    let sideDrawerClasses = classes.SideDrawer;
    if(props.show){
        sideDrawerClasses = classes.SideDrawer + ' ' + classes.Show;
    }
    return(
    <div className={sideDrawerClasses}>
        <ul>
            {/*
            <li><NavLink 
            activeStyle={{fontWeight: 'bold'}} 
            exact to='/account'>account</NavLink></li>
            <li><NavLink 
            activeStyle={{fontWeight: 'bold'}} 
            exact to='/reports'>
            reports</NavLink></li>
            */}
            <li><NavLink 
            activeStyle={{fontWeight: 'bold'}} 
            exact to='/dashboard'>
            dashboard</NavLink></li>
            
            <li>
            {props.auth
                ? <span 
                onClick={props.logoutHandler}>logout</span>
                : <NavLink 
                activeStyle={{fontWeight: 'bold'}}
                exact to="/login">login</NavLink>
            }</li>
        </ul>
    </div>);
    };
    
export default sideDrawer;