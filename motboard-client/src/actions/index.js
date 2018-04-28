import axios from 'axios';
const ROOT_URL = 'http://localhost:3300';

function signUp(user, flag) {
    return {
        type: 'SIGNIN_SUCCESSFUL',
        user,
        flag
    };
}

function signIn(user,flag) {
    return {
        type: 'SIGNIN_SUCCESSFUL',
        user,
        flag
    };
}

function signinError() {
    return {
        type: 'SIGNIN_FAILED',
    };
}


function signupError(msg) {
    return {
        type: 'SIGNUP_FAILED',
        msg: msg
    };
}

function receivedImages(response) {

return{
    type:'RECEIVED_IMAGES',
    payload:response.data
};



}


export function signupAction(userdata) {
    return (dispatch) => {
        const request = axios.post(`${ROOT_URL}/signup`, {userdata: userdata}, {withCredentials: true})
            .then(response => {
                if(response.status === 201){
                    dispatch(signUp(response.data.user,true))
                } else if(response.status === 401){
                    dispatch(signupError("User already exist"))
                }
        }).catch(error => {
            dispatch(signupError("Error Occured"))
        });
    }
}


export function signinAction(userdata) {
    return (dispatch) => {
        const request = axios.post(`${ROOT_URL}/login`, {userdata: userdata}, {withCredentials: true})
            .then(response => {
                if(response.status === 200){
                    dispatch(signIn(response.data.user,true))
                } else{
                    dispatch(signinError())
                }
        }).catch(error => {
            dispatch(signinError())
        });
    }
}

export function getImagesArrange(value) {
    alert("inside arrange images");
    let motBoardName={
        "motBoardName":value
    };
    return (dispatch) => {
        const request = axios.post(`${ROOT_URL}/getImages`,motBoardName, {withCredentials: true}
            , {headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8'
            }}).then(response => {
            dispatch(receivedImages(response));
        }).catch(error => {
            console.log("send error");
        });
    }
}

export function getImages(value) {
  alert("inside images");
    let motBoardName={
        "motBoardName":value
    };
    return (dispatch) => {
        const request = axios.post(`${ROOT_URL}/getImages`,motBoardName, {withCredentials: true}
       , {headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8'
       }}).then(response => {
           dispatch(receivedImages(response));
        }).catch(error => {
            console.log("send error");
        });
    }
}

export function sendFiles(payload) {
    return (dispatch) => {
        alert("sanjay");
        console.log(payload);
        const request = axios.post(`${ROOT_URL}/motboard`,payload, {withCredentials: true}
            ,{headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': payload.get('mypic').type,
            }}
        ).then(response => {
      dispatch(receivedImages(response));
        }).catch(error => {
            console.log("send error");
        });
    }
}