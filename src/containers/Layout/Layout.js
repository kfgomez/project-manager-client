import React, { Component } from 'react';
import {withRouter, Route, Redirect} from 'react-router-dom';
import classes from './Layout.css';

import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index.js';

import Backdrop from '../../components/UI/Backdrop/Backdrop';
import SideDrawer from '../../components/UI/SideDrawer/SideDrawer';
import Spinner from '../../components/UI/Spinner/Spinner';
import Toolbar from '../../components/Toolbar/Toolbar';
import Login from '../../components/Login/Login';
import Dashboard from '../../containers/Dashboard/Dashboard';
import Error from '../../components/UI/Error/Error';

class Layout extends Component{
    state={
        showBackdrop: false, 
        showSideDrawer: false,
    }
    
    hideSideDrawerHandler=()=>{
        this.setState({
            showBackdrop:false,
            showSideDrawer: false,
        });
    }
    showSideDrawerHandler=()=>{
        this.setState({
            showBackdrop: true,
            showSideDrawer: true,
        });
    }
    showBackdropHandler=()=>{
        this.setState({
            showBackdrop: true,
        });
    }
    hideBackdropHandler=()=>{
        this.setState({
            showBackdropHandler: false,
        });
    }
    
    loginHandler=(e, data)=>{
        this.props.authenticateUser(data);
        e.preventDefault();
    }
    
    logoutHandler=()=>{
        const confirmation = window.confirm("logout?");
        if (confirmation){
            this.hideSideDrawerHandler();
            this.props.deauthenticateUser();
            return <Redirect to='/login' />;
        }else{
            return;
        }
    }
    render(){
        let loading=null;
        let backdrop=null;
        let sideDrawer=null;
        let error=null;
        if(this.state.showBackdrop){
          backdrop = <Backdrop
          toggleBackdropHandler={this.hideSideDrawerHandler}/>;
        }
        if(this.state.showSideDrawer){
          sideDrawer=<SideDrawer 
          show={this.state.showSideDrawer}
          logoutHandler={this.logoutHandler}
          auth={this.props.auth}/>;
        }
        if(this.props.loading){
            loading=<Spinner />;
        }
        if(this.props.error){
            error=<Error 
            clicked={this.props.setErrorFalse}
            error={this.props.errorMessage}
            nextStep={this.props.nextStep}/>;
        }
        return(
            <div className={classes.Layout}>
            <Toolbar 
            auth={this.props.auth}
            logoutHandler={this.logoutHandler}
            showSideDrawerHandler={this.showSideDrawerHandler}
            />
            {loading}
            {backdrop}
            {sideDrawer}
            {error}
            <Route exact path='/'
            render={()=>(<Redirect to='/login'/>)}/>
            <Route exact path='/login' 
            render={
            this.props.auth
            ?()=>(<Redirect to='/dashboard'/>)
            :()=>(<Login 
            loginHandler={this.loginHandler}/>)
            }/>
            <Route exact path='/dashboard' 
            render={
            this.props.auth
            ?()=>(
            <Dashboard 
            showBackdropHandler={this.showBackdropHandler}
            hideBackdropHandler={this.hideBackdropHandler}
            auth={this.props.auth}/>)
            :()=>(<Redirect to='/login'/>)
            }/>
            </div>
            );
    }
}

const mapStateToProps = (state)=>{
    return{
        auth: state.auth.isUserAuthenticated,
        token: state.auth.token,
        loading: state.ui.loading,
        error: state.ui.error,
        errorMessage: state.ui.errorMessage,
        nextStep: state.ui.nextStep,
    };
};

const mapDispatchToProps = (dispatch)=>{
    return{
        isUserAuthenticated: ()=>dispatch(actionCreators.isUserAuthenticated()),
        deauthenticateUser: ()=>dispatch(actionCreators.deauthenticateUser()),
        authenticateUser: (data)=>dispatch(actionCreators.authenticateUser(data)),
        setErrorFalse: ()=>dispatch(actionCreators.setErrorFalse()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));