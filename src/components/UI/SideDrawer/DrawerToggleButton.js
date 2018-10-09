import React from 'react';
import classes from './DrawerToggleButton.css';

const drawerToggleButton =(props)=>(
    <button 
    className={classes.DrawerToggleButton}
    onClick={props.toggleHandler}>
        <div className={classes.ButtonLines}/>
        <div className={classes.ButtonLines}/>
        <div className={classes.ButtonLines}/>
    </button>
    );

export default drawerToggleButton;