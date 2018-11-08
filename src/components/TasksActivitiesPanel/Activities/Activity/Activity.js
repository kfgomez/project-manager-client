import React from 'react';

const activity=props=>{
    let date = props.activity.created_at;
    date = date.split('T')
    const newDate = new Date(date);

    return(
        <tr>
            <td>
            {props.activity.description}
            </td>
            
            <td>
            {props.activity.username}
            </td>
            
            <td>
            {props.activity.time_spent}
            </td>
            
            <td>
            {newDate.toString().slice(0, 25)}
            </td>
        </tr>
        );
};

export default activity;