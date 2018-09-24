import React from 'react';
import rcLogo from '../../../assets/images/LOGO-02.svg';
import classes from './Logo.css'

const logo = (props)=>{
    return(
    <div className={classes.Logo}>
    <img src={rcLogo} alt='redcarats'/> 
    </div>
    )
};

export default logo;