import React, { Component } from 'react';
import classes from './Dashboard.css';
import Projects from '../../components/Projects/Projects';
import FullProject from '../../components/FullProject/FullProject';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index.js';
import BackdropPanel from '../../components/UI/BackdropPanel/BackdropPanel';
import TasksActivitiesPanel from '../../components/TasksActivitiesPanel/TasksActivitiesPanel';
import Backdrop from '../../components/UI/Backdrop/Backdrop';


class Dashboard extends Component{
    state={
        showPanel: false, 
        panelType: null,
        selectedTaskData: {id: 0},
        taskFormType: 'new',
    }
    componentDidMount(){
        if(this.props.selectedProjectId===0){
            this.props.getProjects(
                this.props.token, 
                this.props.selectedProjectId,
                this.props.currentPage);
            this.props.getProjectsLength(this.props.token);
        }
    }
    
    selectProjectHandler =(id)=>{
        const project=this.props.projects.find(el=>{
            return el.id ===id;
        });
        this.props.selectProject(id, project);
    }
    cancelEditHandler=()=>{
        this.props.selectProject(this.props.selectedProjectId, this.props.projectData);
    }
    
    newProjectHandler=()=>{
        this.resetTaskAction();
        this.props.newProject();
    }
    
    submitProjectHandler=(e, data)=>{
        this.props.postProject(this.props.token, data, this.props.currentPage);
        e.preventDefault();
    }
    
    editProjectHandler=(e)=>{
        this.props.editProject();
        e.preventDefault();
    }
    
    updateProjectHandler=(e, data)=>{
        e.preventDefault();
        this.props.updateProject(
            this.props.selectedProjectId, 
            this.props.token, 
            data, 
            this.props.currentPage);
    }
    
    updateStatusHandler=(e)=>{
        this.props.updateProject(
            this.props.selectedProjectId,
            this.props.token,
            {status: e.target.value},
            this.props.currentPage
            );
    }
    
    renderPanelDataHandler=(e, type)=>{
        this.setState({
            showPanel: true,
            panelType: type
        });
    }
    
    closePanelHandler=()=>{
        this.setState({showPanel: false});
        this.resetTaskAction();
    }
    
    postActivityHandler=(e, state)=>{
        this.props.postActivity(
            this.props.selectedProjectId,
            this.props.token,
            state, 
            this.props.currentPage);
        e.preventDefault();
    }
    postTaskHandler=(data)=>{
        this.props.postTask(
            this.props.selectedProjectId, 
            this.props.token, 
            data, 
            this.props.currentPage);
        this.resetTaskAction();
    }
    updateTaskHandler=(data, id)=>{
        this.props.updateTask(
            this.props.selectedProjectId,
            id,
            this.props.token,
            data, 
            this.props.currentPage);
    }
    getNextPage=(page)=>{
        this.props.getProjects(this.props.token,this.props.selectedProjectId,page);
    }
    selectTaskHandler=(data)=>{
        this.setState({
            selectedTaskData: data,
            taskFormType: 'edit',
        });
    }
    resetTaskAction=()=>{
        const task={
            description: '',
            difficulty: '',
            source: '',
            id: 0,
            status: '',
        };
        this.setState({
            taskFormType: 'new',
            selectedTaskData: task,
        });
    }
    deleteTaskHandler=(id)=>{
        const confirmation = window
        .confirm('deletion cannot be undone, you sure you want to continue?');
        if(confirmation){
            if(id === this.state.selectedTaskData.id){
                this.resetTaskAction();
            }
            this.props.deleteTask(id, this.props.selectedProjectId, this.props.token, this.props.currentPage);
        }
    }
    render(){
        let projectData=null;
        let tasks=null;
        let activities=null;
        let backdropPanel=null;
        let panelData=null;
        if(this.props.selectedProjectId !== 0){
            projectData = this.props.projectData;
            activities = this.props.projectData.activities;
            tasks = this.props.projectData.tasks;
        }
        if(this.state.panelType==='tasks'){
            panelData=tasks;
        }
        if(this.state.panelType==='activities'){
            panelData=activities;
        }
        if(this.state.showPanel){
            backdropPanel=[
            <Backdrop 
            toggleBackdropHandler={this.closePanelHandler}
            key="backdrop"/>,
            <BackdropPanel 
            closePanelHandler={this.closePanelHandler}
            key="backdropPanel">
            <TasksActivitiesPanel 
            key="taskactivitypanel"
            panelData={panelData}
            panelType={this.state.panelType}
            projectTitle={projectData.title}
            projectDescription={projectData.description}
            updateTaskHandler={this.updateTaskHandler}
            postActivityHandler={this.postActivityHandler}
            postTaskHandler={this.postTaskHandler}
            selectTaskHandler={this.selectTaskHandler}
            selectedTaskData={this.state.selectedTaskData}
            taskFormType={this.state.taskFormType}
            resetTaskAction={this.resetTaskAction}
            deleteTaskHandler={this.deleteTaskHandler}
            />
            </BackdropPanel>
                ];
            }
        

        return(
            <div className={classes.Dashboard}>
            <Projects 
            newProjectHandler={this.newProjectHandler}
            projects={this.props.projects}
            selectProjectHandler={this.selectProjectHandler}
            selectedProjectId={this.props.selectedProjectId}
            getNextPage={this.getNextPage}
            currentPage={this.props.currentPage}
            pages={this.props.pages}/>
            <FullProject 
            projectData={projectData}
            submitProjectHandler={this.submitProjectHandler}
            projectAction={this.props.projectAction}
            editProjectHandler={this.editProjectHandler}
            updateProjectHandler={this.updateProjectHandler}
            cancelEditHandler={this.cancelEditHandler}
            updateStatusHandler={this.updateStatusHandler}
            renderPanelDataHandler={this.renderPanelDataHandler}
            />
            {backdropPanel}
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
        pages: state.projects.pages,
        currentPage: state.projects.currentPage,
        projectData: state.projects.projectData,
    };
};

const mapDispatchToProps=(dispatch)=>{
    return{
        getProjects:(token, id, currentPage)=>dispatch(actionCreators.getProjects(token, id, currentPage)),
        selectProject:(id, projectData)=>dispatch(actionCreators.selectProject(id, projectData)),
        newProject: ()=>dispatch(actionCreators.newProject()),
        postProject: (data, token, page)=>dispatch(actionCreators.postProject(data, token, page)),
        editProject: ()=>dispatch(actionCreators.editProject()),
        updateProject: (id, token, data, page)=>dispatch(actionCreators.updateProject(id, token, data, page)),
        getProjectsLength: (token)=>dispatch(actionCreators.getProjectsLength(token)),
        postActivity: (projectId, token, data, page)=>dispatch(actionCreators.postActivity(projectId, token, data, page)),
        postTask: (projectId, token, data, page)=>dispatch(actionCreators.postTask(projectId, token, data, page)),
        updateTask: (projectId,taskId,token,data, page)=>dispatch(actionCreators.updateTask(projectId,taskId,token,data, page)),
        deleteTask: (taskId, projectId, token, page)=>dispatch(actionCreators.deleteTask(taskId, projectId, token, page))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);