import React from 'react';
import Login from '../Login/Login';
import { Route, Link, Redirect } from 'react-router-dom';
import classes from './Navigation.css';
import Logo from '../UI/Logo/Logo';
import Dashboard from '../../containers/Dashboard/Dashboard';

const navigation = (props) =>{
    return(
        <div>
            <nav className={classes.Navigation}>
                <ul>
                <li>
                <Logo /></li>
                {
                    props.auth
                    ?<li className={classes.Link}
                    onClick={()=>props.logoutHandler()}
                    >
                    LOGOUT</li>
                    :<li
                    className={classes.Link}
                    ><Link to='/'>
                    LOGIN</Link></li>
                }
                {
                    props.auth
                    ?<li className={classes.Link}
                    ><Link to='/dashboard'>
                    DASHBOARD</Link></li>
                    :null
                }
                </ul>
            </nav>
            <div>
            <Route exact path='/'
            render={
            ()=>(
            props.auth
            ?<Redirect to='/dashboard'/>
            :<Login 
            loginHandler={(e, data)=>props.loginHandler(e, data)}
            />
            )
            }/>
            <Route exact path='/dashboard'
            render={
            ()=>(
            props.auth
            ?<Dashboard/>
            :<Redirect to='/'/>)
            }/>
            </div>
        </div>
        );
};
export default navigation;
