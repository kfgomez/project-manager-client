import * as actionType from '../actions/actionTypes';

const initalState = {
    projects:[],
    selectedProjectId: 0,
    projectAction: 'new',
};

const reducer = (state=initalState, action)=>{
    switch(action.type){
        case actionType.GET_PROJECTS:
            const projects = action.payload.projects;
            let projectAction;
            action.payload.selectedProjectId === 0
            ?   projectAction = 'new'
            :   projectAction = 'show';
            return{
                ...state, 
                projects: projects,
                selectedProjectId: action.payload.selectedProjectId,
                projectAction: projectAction,
            };
        case actionType.SELECT_PROJECT:
            return{
                ...state, 
                selectedProjectId: action.payload.id,
                projectAction: 'show'
            };
        case actionType.NEW:
            return{
                ...state, 
                selectedProjectId: 0,
                projectAction: 'new',
            };
        case actionType.EDIT_PROJECT:
            return{
                ...state, 
                projectAction: 'edit'
            };
        
        default:
        return{
            ...state,
        };
    }
};

export default reducer;