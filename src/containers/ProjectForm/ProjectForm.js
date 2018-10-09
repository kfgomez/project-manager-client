import React, { Component } from 'react';
import classes from './ProjectForm.css';
class ProjectForm extends Component{
    state={
        inputElements: [{
            name: 'title',
            type: 'text',
            value: '',
            placeholder: 'project title...',
            valid: false,
        },{
            name: 'description',
            type: 'text',
            value: '',
            placeholder: 'description...',
            valid: false,
        },
        {
            name: 'budget',
            type: 'number',
            value: '',
            placeholder: 'budget $',
            valid: false,
        },{
            name: 'delivery_date',
            type: 'date',
            value: '',
            placeholder: '',
            valid: false,
        },{
            name: 'contact_name',
            type: 'text',
            value: '',
            placeholder: 'contact name',
            valid: false,
        },{
            name: 'contact_phone',
            type: 'number',
            value: '',
            placeholder: 'contact phone#',
            valid: false,
        },{
            name: 'contact_email',
            type: 'email',
            value: '',
            placeholder: 'contact email',
            valid: false,
        }]
    }
    componentDidMount(){
        if(this.props.type ==='edit'){
            this.mapDataToState();
        }else{
            return;
        }
    }
    changeHandler =(e, id)=>{
        const name = e.target.name;
        const value = e.target.value;
        const newInputObj={...this.state.inputElements.find((el)=>{
            return el.name === name;
        })};
        newInputObj.value=value;
        newInputObj.value.length>0
            ? newInputObj.valid=true
            : newInputObj.valid=false;
        const newInputArr=[...this.state.inputElements];
        newInputArr[id]=newInputObj;
        this.setState({
            inputElements: newInputArr,
        });
    }
    
    submitFormHandler=(e)=>{
        const projectData={};
        this.state.inputElements.map(el=>{
            const name = el.name;
            return projectData[name]=el.value;
        });
        if(this.props.type==='new'){
            this.props.submitProjectHandler(e, projectData);
        }else if(this.props.type ==='edit'){
            this.props.updateProjectHandler(e, projectData);
        }
            
    }
    
    mapDataToState=()=>{
        let updatedState =[];
        this.props.projectData.map(inputElement=>{
            const newObj={
                ...this.state.inputElements
                .find(el=>(el.name===inputElement.name))};
            newObj.value=inputElement.value;
            updatedState.push(newObj);
        });
        this.setState({
            inputElements: updatedState
        });
    }
    
    render(){
        let cancelButton;
        this.props.type==='edit'
            ? cancelButton = <input type='button' value="cancel" onClick={(id)=>this.props.selectProjectHandler(this.props.id)}/>
            : null;
        const inputElements = this.state.inputElements.map((el, id)=>{
            const elArrPosition = id;
            return(
            <input
            key={elArrPosition}
            name={el.name}
            type={el.type}
            value={el.value}
            placeholder={el.placeholder}
            onChange={(e, id)=>this.changeHandler(e, elArrPosition)}/>);
            });
        return(
            <div className={classes.FormPanel}>
                <h1>{this.props.type}</h1>
                <div>
                <form 
                onSubmit={this.submitFormHandler}>
                {inputElements}
                <input type='submit' value="save"/>
                {cancelButton}
                </form>
                </div>
            </div>
            );
    }
}

export default ProjectForm;