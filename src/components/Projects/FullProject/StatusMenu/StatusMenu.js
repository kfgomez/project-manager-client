import React from 'react';
import classes from './StatusMenu.css';

const statusMenu=(props)=>{
    const options = [{
        name: 'open',
        value: 'open',
        className: classes.Open
    },{
        name: 'in_progress',
        value: 'in_progress',
        className: classes.InProgress
    },{
        name: 'hold',
        value: 'hold',
        className: classes.Hold
    },{
        name: 'completed',
        value: 'completed',
        className: classes.Completed,
    },{
        name: 'delivered',
        value: 'delivered',
        className: classes.Delivered
    },{
        name: 'canceled',
        value: 'canceled',
        className: classes.Canceled
    }];
    const optionsElements=options.map((el, id)=>{
        return <option 
        className={[classes.Option, el.className].join(' ')}
        value={el.value}
        key={id}
        >{el.name}</option>;
    });
    return(
        <select 
        onChange={(e)=>props.updateStatusHandler(e)}
        value={props.value}
        className={classes.DropDownMenu}>   
        {optionsElements}
        </select>
        );
};

export default statusMenu;