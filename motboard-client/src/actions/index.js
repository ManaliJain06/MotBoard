import axios from 'axios';
// import swal from 'sweetalert';
const ROOT_URL = 'http://localhost:3300';

function signUp(response) {
    // swal("Successfully Account Created");
    alert("signup successful");
    return {
        type: 'SIGNUP_SUCCESSFULL',
        payload: response.status
    };
}

function signIn(response,userdata) {
    //swal("Login Successful");
    alert("signed Successfully");
    let state = {
        isLoggedin: true,
        username:userdata.username
    };
    return {
        type: 'SIGNUP_SUCCESSFULL',
        payload: state
    };
}

function signinError(response) {
    //  swal("Login Failed");
    let state = {
        isLoggedin: false
    };
    return {
        type: 'SIGNUP_FAILED',
        payload: state
    };
}


function signupError(response) {
    return {
        type: 'SIGNUP_FAILED',
        payload: "400"
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
        const request = axios.post(`${ROOT_URL}/signup`, {userdata: userdata}, {withCredentials: true}).then(response => {
            dispatch(signUp(response))
        }).catch(error => {
            dispatch(signupError(error))
        });
    }
}


export function signinAction(userdata) {
    return (dispatch) => {
        const request = axios.post(`${ROOT_URL}/login`, {userdata: userdata}, {withCredentials: true}).then(response => {
            dispatch(signIn(response,userdata))
        }).catch(error => {
            dispatch(signinError(error))
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