import React from 'react';
import classes from './BackdropPanel.css';

const backdropPanel = props =>(
    <div className={classes.BackdropPanel}>
    <div 
    onClick={props.closePanelHandler}
    className={classes.CloseX}>
    X</div>
    {props.children}
    </div>
    );

export default backdropPanel;