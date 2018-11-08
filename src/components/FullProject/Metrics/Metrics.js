import React from 'react';
import classes from './Metrics.css';
import PointsIcon from '../../UI/Icons/Points';
import DollarIcon from '../../UI/Icons/Dollar';
import DumbbellIcon from '../../UI/Icons/Dumbbell';
import TaskIcon from '../../UI/Icons/Task';
import ActivityIcon from '../../UI/Icons/Activity';
const metrics =(props)=>{
    return(
        <div className={classes.Main}>
            <div 
            className={classes.MetricsPanel}>
                <div className={`${classes.Card} ${classes.Selectable}`}
                onClick={(e, type)=>props.renderPanelDataHandler(e, 'activities')}>
                <ActivityIcon/>
                <div style={{display: 'inline-block', fontSize: '20px'}}>{props.totalActivities}</div>
                <div>activities</div>
                </div>
                <div className={`${classes.Card} ${classes.Selectable}`}
                onClick={(e, type)=>props.renderPanelDataHandler(e, 'tasks')}>
                <TaskIcon/>
                <div style={{display: 'inline-block', fontSize: '20px'}}>{props.totalTasks}</div>
                <div>Tasks</div>
                </div>
            </div>
            <div className={classes.MetricsPanel}>
                <div className={classes.Card}>
                <PointsIcon/>
                <div style={{display: 'inline-block', fontSize: '20px'}}>{props.points}</div>
                <div>points</div>
                </div>
                
                <div className={classes.Card}>
                <DollarIcon/>
                <div style={{display: 'inline-block', fontSize: '20px'}}>{props.budget}</div>
                <div>budget</div>
                </div>
                
                <div className={classes.Card}>
                <DumbbellIcon/>
                <div style={{display: 'inline-block', fontSize: '20px'}}>
                {props.time_spent}min.</div>
                <div>effort</div>
                </div>
            </div>
        </div>
        );
};

export default metrics;