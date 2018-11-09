import React from 'react';
import classes from './Spinner.css';

const spinner=()=>{
    return(
        <div className={classes.SpinnerWrapper}>
            <div className={classes.ldsHourglass}></div>
        </div>
        
    );
};

export default spinner;