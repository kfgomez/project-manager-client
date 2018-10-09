import React, { Component } from 'react';
import classes from './Dashboard.css';
import Projects from '../../components/Projects/Projects';
import FullProject from '../../components/Projects/FullProject/FullProject';
import TaskProjectPanel from '../../components/TaskProject/TaskProjectPanel';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index.js';

class Dashboard extends Component{
    
    componentDidMount(){
        this.props.getProjects(this.props.token, 0);
    }
    
    selectProjectHandler = (id)=>{
        this.props.resetSelection();
        this.props.selectProject(id);
    }
    
    newProjectHandler=()=>{
        this.props.resetSelection();
        this.props.newProject();
    }
    
    submitProjectHandler=(e, data)=>{
        this.props.postProject(this.props.token, data);
        e.preventDefault();
    }
    
    selectItemHandler=(id, type)=>{
        this.props.selectItem(id, type);
    }
    
    editProjectHandler=(e)=>{
        this.props.editProject();
        e.preventDefault();
    }
    
    updateProjectHandler=(e, data)=>{
        this.props.updateProject(this.props.selectedProjectId, this.props.token, data);
        e.preventDefault();
    }
    updateStatusHandler=(e)=>{
        console.log('ID: ', this.props.selectedProjectId, 'value: ', e.target.value);
        this.props.updateProject(
            this.props.selectedProjectId,
            this.props.token,
            {status: e.target.value},
            );
    }
    render(){
        const projects= this.props.projects;
        let projectData = null;
        let project;
        if(this.props.selectedProjectId !== 0){
            project = projects.find(el =>{
                return el.id === this.props.selectedProjectId;
            });
            projectData= project;
        }
        
        let itemData = { item: null, 
                        type: this.props.selectedItemType};

        if (project && (this.props.selectedItemId !==0)){
            const type = this.props.selectedItemType;
            switch(type){
                case 'task':
                    itemData = {
                        item: project.tasks.find(el =>{
                        return el.id === this.props.selectedItemId;
                    }), 
                    type: type,
                    };
                break;
                case 'activity':
                    itemData = {
                        item: project.activities.find(el=>{
                            return el.id === this.props.selectedItemId;
                        }),
                        type: type,
                    };
                break;
                default: 
                return;
            }
        }
        return(
            <div className={classes.Dashboard}>
            <Projects 
            newProjectHandler={this.newProjectHandler}
            projects={this.props.projects}
            selectProjectHandler={this.selectProjectHandler}
            selectItemHandler={this.selectProjectHandler}
            selectedProjectId={this.props.selectedProjectId}/>
            <FullProject 
            projectData={projectData}
            selectItemHandler={this.selectItemHandler}
            submitProjectHandler={this.submitProjectHandler}
            projectAction={this.props.projectAction}
            editProjectHandler={this.editProjectHandler}
            updateProjectHandler={this.updateProjectHandler}
            selectProjectHandler={this.selectProjectHandler}
            updateStatusHandler={this.updateStatusHandler}
            />
            </div>
            );
    }
}
const mapStateToProps = (state)=>{
    return{
        token: state.auth.token,
        projects: state.projects.projects,
        projectAction: state.projects.projectAction,
        selectedProjectId: state.projects.selectedProjectId,
        selectedItemId: state.projects.item.id,
        selectedItemType: state.projects.item.type,
        
    };
};

const mapDispatchToProps=(dispatch)=>{
    return{
        getProjects:(token, id)=>dispatch(actionCreators.getProjects(token, id)),
        selectProject:(id)=>dispatch(actionCreators.selectProject(id)),
        newProject: ()=>dispatch(actionCreators.newProject()),
        selectItem: (id, type)=>dispatch(actionCreators.selectItem(id, type)),
        resetSelection: ()=>dispatch(actionCreators.resetSelection()),
        postProject: (data, token)=>dispatch(actionCreators.postProject(data, token)),
        editProject: ()=>dispatch(actionCreators.editProject()),
        updateProject: (id, token, data)=>dispatch(actionCreators.updateProject(id, token, data))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);