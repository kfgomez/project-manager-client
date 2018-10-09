import React  from 'react';
import Login from '../Login/Login';
import { Route, Link, } from 'react-router-dom';
import classes from './Navigation.css';
import Logo from '../UI/Logo/Logo';
import Dashboard from '../../containers/Dashboard/Dashboard';

const navigation =props=>{

        return(
        <div>
            <nav className={classes.Navigation}>
                <ul>
                <li className={classes.Logo}>
                <Logo /></li>
                {
                    props.auth
                    ?<li className={classes.Link}
                    onClick={props.logoutHandler}
                    >
                    logout</li>
                    :<li
                    className={classes.Link}
                    ><Link to='/login'>
                    login</Link></li>
                }
                <li className={classes.Link}>
                <Link to='/my_account'>
                my account</Link></li>
                {
                    props.auth
                    ?
                    <li className={classes.Link}
                    ><Link to='/dashboard'>
                    dashboard</Link></li>
                    :null
                }
                <li className={classes.Link}>
                <Link to='/stats'>
                stats</Link></li>
                </ul>
            </nav>
            <div className={classes.LayoutWrapper}>
            <Route exact path='/login'
            render={
            ()=>(<Login 
            loginHandler={(e, data)=>props.loginHandler(e, data)}
            />)
            }/>
            <Route exact path='/dashboard'
            render={
            ()=>(<Dashboard/>)
            }/>
            </div>
        </div>
        );
};

export default navigation;
    
