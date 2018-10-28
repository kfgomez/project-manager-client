import * as actionType from '../actions/actionTypes';

const initalState = {
    projects:[],
    selectedProjectId: 0,
    projectAction: 'new',
    pages: 0,
    currentPage:1,
    projectData: null,
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
                currentPage: action.payload.currentPage,
            };
        case actionType.SELECT_PROJECT:
            return{
                ...state, 
                selectedProjectId: action.payload.id,
                projectAction: 'show',
                projectData: action.payload.projectData
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
        case actionType.GET_PROJECTS_LENGTH:
            let pages=Math.ceil(action.payload.projectsLength/5);
            return{
                ...state,
                pages: pages
            };
        case actionType.UPDATE_PROJECT_DATA:
            return{
                ...state,
                projectData:{
                    ...action.payload.updatedProject,
                }
            };
        default:
        return{
            ...state,
        };
    }
};

export default reducer;