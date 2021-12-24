import * as actionTypes from '../actionTypes';
import axios from "axios";

export const authSuccess =(token , userId) =>{
    return{
        type : actionTypes.AUTH_SUCCESS,
        payload:{
            token : token,
            userId : userId,
        }
    }
};

export const  auth =(email ,password, mode) => dispatch =>{
        dispatch(authLoading(true));
        const authData = {
            email : email,
            password : password
        };

        const appKey  = "AIzaSyB1GB9rNkEPqatACcXCHPdSXfT4fyV_v04";
        let  authURL = null;
        if(mode === "sign-up"){
            authURL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
        }else{
            authURL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
        }

        axios.post(authURL + appKey , authData)
            .then(response => {
                dispatch(authLoading(false));
                localStorage.setItem('token',response.data.idToken);
                localStorage.setItem('userId',response.data.localId);
                dispatch(authSuccess(response.data.idToken , response.data.localId));
            })
            .catch(error => {

                dispatch(authLoading(false));
                 dispatch(authFailed(error.response.data.error.message))
            })
};

export const authCheck = () => dispatch =>{
    const token = localStorage.getItem('token');
    if(!token){

    }else{
        const userId = localStorage.getItem('userId')
        dispatch(authSuccess(token , userId));
    }
};

export const authLoading = isLoading =>{
    return{
        type: actionTypes.AUTH_LOADING,
        payload: isLoading
    }
};

export const logout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    return{
        type: actionTypes.AUTH_LOGOUT,
    }
};
export const authFailed = errMsg =>{
    return{
        type : actionTypes.AUTH_FAILED,
        payload : errMsg,
    }
};
