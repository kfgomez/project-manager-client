import React, { Component } from 'react';
import Auth from '../../modules/Auth';
import axios from 'axios';
import Navigation from '../../components/Navigation/Navigation';
import classes from './Layout.css';

class Layout extends Component{
    state={
        auth: Auth.isUserAuthenticated()
    }
    
    loginHandler =(e, data)=>{
        axios.post('/login', data)
        .then(res=>{
            const token = res.data.token;
            Auth.authenticateToken(token);
            this.setState({
                auth: Auth.isUserAuthenticated()
            });
        })
        .catch(err=>{
            if (err){
                window.alert('unable to authenticate')}
        });
        e.preventDefault();
    }
    
    logoutHandler=()=>{
        const confirmation = window.confirm("logout?");
        if (confirmation){
            const token = Auth.getToken();
            axios({
                method: 'delete',
                url: '/logout',
                headers:{
                    "Authorization": `Token ${token}`,
                    "Content-Type": "application/json"}
            }).then(res =>{
                if (res){
                    Auth.deauthenticateUser();
                    this.setState({auth: Auth.isUserAuthenticated()});
                }
            }).catch(err => console.log(err));
        }else{
            return;
        }
    }
    render(){
        return(
            <div>
            <Navigation 
            className={classes.Navigation}
            loginHandler={(e, data)=>this.loginHandler(e, data)}
            auth={this.state.auth}
            authCheckHandler={()=>this.authCheckHandler}
            logoutHandler={()=>this.logoutHandler()}/>
            </div>
            );
    }
}

export default Layout;