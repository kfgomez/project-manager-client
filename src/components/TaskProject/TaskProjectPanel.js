import React from 'react';
import classes from './TaskProjectPanel.css';
import FullTask from './FullTask/FullTask';
import FullActivity from './FullActivity/FullActivity';

const taskProjectPanel = props =>{
    let component = null;
    switch(props.data.type){
        case 'task':
            component = <FullTask 
            data={props.data}/>;
            break;
        case 'activity':
            component = <FullActivity 
            data={props.data} />;
            break;
        default:
            component = <div>No Item is selected</div>;
    }
    return(
        <div className={classes.Panel}>
        {component}
        </div>
        );
};

export default taskProjectPanel;