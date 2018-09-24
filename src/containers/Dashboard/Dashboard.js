import React, { Component } from 'react';
import classes from './Dashboard.css';
import axios from 'axios';
import Auth from '../../modules/Auth';
import Projects from '../../components/Projects/Projects';
import FullProject from '../../components/Projects/FullProject/FullProject';

class Dashboard extends Component{
    state ={
        projects:[],
        error: false,
        selectedProject: null,
    }
    componentDidMount(){
        axios({
            url:'/projects',
            method: 'get',
            headers:{
                "Authorization": `Token ${Auth.getToken()}`,
                "Content-Type": "application/json"
            }
        }).then(res => {
            this.setState({
                projects: res.data
            });
        })
        .catch(err => {
            this.setState({error: true});
            console.log(err, '[IN:Dashboard.js] line:27');
            window.alert(`Error while getting data, ${err}`);
        });
    }
    
    newProjectHandler = () =>{
        this.setState({
            selectedProject: null
        });
    }
    
    selectProjectHandler = (id)=>{
        const select = id - 1;
        this.setState({
            selectedProject: this.state.projects[select]
        });
    }
    render(){
        const projects= this.state.projects;
        const selectedProject = this.state.selectedProject;
        
        return(
            <div className={classes.Dashboard}>
            <Projects 
            projects={projects}
            selectProjectHandler={this.selectProjectHandler}
            newProjectHandler={this.newProjectHandler}/>
            <FullProject project={selectedProject}/>
            </div>
            );
    }
}

export default Dashboard;