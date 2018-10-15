import React, {Component} from 'react';


class StatusMenu extends Component{
    state={
        options:[{
            name: 'open',
            value: 'open'
        },{
            name: 'completed',
            value: 'completed'
        },{
            name: 'canceled',
            value: 'canceled'
        }]
    }
    changeHandler=(e)=>{
        const newStatus={status: e.target.value};
        const id = this.props.id;
        this.props.upateTaskHandler(newStatus, id);
    }
    render(){
        const optionsElements=this.state.options.map((option, id)=>{
            return( 
                <option 
                value={option.value}
                key={id}>{option.name}</option>
                );
        });
        return(
        <select
        value={this.props.value}
        onChange={this.changeHandler}>
        {optionsElements}
        </select>
        );
    }
}

export default StatusMenu;
