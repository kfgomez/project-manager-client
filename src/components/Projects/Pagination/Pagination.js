import React from 'react';
import classes from './Pagination.css';

const pagination=(props)=>{
    let previousDisabled=false;
    let prevEnabledClass=classes.Enabled;
    
    let nextDisabled=false;
    let nextEnabledClass=classes.Enabled;
    
    
    if(props.currentPage===1){
        previousDisabled=true;
        prevEnabledClass='';
    }
    if(props.currentPage===props.pages){
        nextDisabled=true;
        nextEnabledClass='';
    }
    return(
        <div className={classes.PaginationPanel}>
        <button disabled={previousDisabled}
        className={[classes.Previous, classes.Round, prevEnabledClass].join(' ')}
        onClick={(page)=>props.getNextPage(props.currentPage-1)}>&#8249;</button>
        <span>{props.currentPage}</span>
        <button 
        className={[classes.Next, classes.Round, nextEnabledClass].join(' ')}
        disabled={nextDisabled}
        onClick={(page)=>props.getNextPage(props.currentPage+1)}>&#8250;</button>
        </div>
        );
};

export default pagination;