import * as actionType from '../actions/actionTypes';
import Auth from '../../modules/Auth';

const initalState = {
    isUserAuthenticated: Auth.isUserAuthenticated(),
    token: Auth.getToken(),
};

const reducer = (state=initalState, action)=>{
    switch(action.type){
        case actionType.IS_USER_AUTH:
            return {
                ...state,
                isUserAuthenticated: Auth.isUserAuthenticated(),
                token: Auth.getToken(),
            };
        default:
            return{
                ...state,
            };
    }
};

export default reducer;