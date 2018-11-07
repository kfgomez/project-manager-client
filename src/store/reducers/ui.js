import * as actionType from '../actions/actionTypes';

const initialState={
    loading: false,
    error: false,
    errorMessage: '',
};

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case actionType.SET_LOADING_TRUE:
            return{
                ...state,
                loading:true,
            };
        case actionType.SET_LOADING_FALSE:
            return{
                ...state,
                loading:false
            };
        case actionType.SET_ERROR_TRUE:
            return{
                ...state,
                error: true,
                errorMessage: action.payload.error
            };
        case actionType.SET_ERROR_FALSE:
            return{
                ...state,
                error: false,
                loading: false,
                errorMessage: '',
            };
        default:
        return{
            ...state,
        };
    }
};

export default reducer;