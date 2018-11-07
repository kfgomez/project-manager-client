import * as actionTypes from './actionTypes';

export const setLoadingTrue=()=>{
    return{
        type: actionTypes.SET_LOADING_TRUE,
    };
};

export const setLoadingFalse=()=>{
    return{
        type: actionTypes.SET_LOADING_FALSE,
    };
};

export const setErrorTrue=(error)=>{
    return{
        type: actionTypes.SET_ERROR_TRUE,
        payload:{
            error: error,
        }
    };
};
export const setErrorFalse=()=>{
    return{
        type: actionTypes.SET_ERROR_FALSE,
    };
};