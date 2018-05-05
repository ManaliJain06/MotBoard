import axios from 'axios';
const ROOT_URL = 'http://localhost:3300';

function signUp(user, flag) {
    return {
        type: 'SIGNIN_SUCCESSFUL',
        user,
        flag
    };
}
function signupError(response) {
    let msg = "";
    if(response.status === 401){
        msg = "User already exists in the system";
    } else{
        msg = "Error Occured";
    }
    return {
        type: 'SIGNUP_FAILED',
        msg: msg
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
function signOut(){
    return {
        type: 'SIGNOUT_SUCCESSFUL',
    };
}

function signOutError(){
    return {
        type: 'SIGNOUT_ERROR',
    };
}

function receivedImages(response) {
    return{
        type:'RECEIVED_IMAGES',
        payload:response.data
    };
}

function updateUserProfile(res){
    if(res.status === 201){
        return {
            type: 'UPDATE_USER_PROFILE_PiC',
            response: res
        } ;
    } else if(res.status === 500){
        return {
            type: 'UPDATE_USER_PROFILE_PIC_ERROR',
        };
    }
}

function updateUser(res){
    if(res.status === 201){
        return{
            type: 'UPDATE_USER_PROFILE',
            user: res.data.user
        };
    } else if(res.status === 400){
        return {
            type: 'UPDATE_USER_PROFILE_ERROR',
        };
    }
}

function publicMotboards(res){
    return  {
        type: "PUBLIC_MOTBOARDS",
        boards: res
    };
}

function updatedUserBoards(user){
    return {
        type:"UPDATED_USER_BOARDS",
        user:user
    };
}

function updatedUserBoardsError(res){
    return {
        type:"UPDATED_USER_BOARDS_ERROR",
    };
}

export function signupAction(userdata) {
    return (dispatch) => {
        const request = axios.post(`${ROOT_URL}/signup`, {userdata: userdata}, {withCredentials: true})
            .then(response => {
                dispatch(signUp(response.data.user,true));
        }).catch(error => {
            dispatch(signupError(error.response));
        });
    }
}


export function signinAction(userdata) {
    return (dispatch) => {
        const request = axios.post(`${ROOT_URL}/login`, {userdata: userdata}, {withCredentials: true})
            .then(response => {
                if(response.status === 200){
                    dispatch(signIn(response.data.user,true));
                } else{
                    dispatch(signinError());
                }
        }).catch(error => {
            dispatch(signinError());
        });
    }
}

export function signOutAction(userdata) {
    return (dispatch) => {
        const request = axios.post(`${ROOT_URL}/signout`, {userdata: userdata}, {withCredentials: true})
            .then(response => {
                    dispatch(signOut());
            }).catch(error => {
                dispatch(signOutError());
            });
    }
}

export function updateUserProfilePicAction(payload){
    return (dispatch) => {
        fetch(`http://localhost:3300/updateUserProfilePic`, {
            method: 'POST',
            body: payload
        }).then(response =>
            response.json().then(data => ({
                    fileURL: data.fileURL,
                    status: response.status
                })
            ).then(res => {
                console.log("hjhjhjhjhjkkjhjhkj",res);
                dispatch(updateUserProfile(res))
                // return res;
            }))
    }
}

export function updateUserData(payload){

    return (dispatch) => {
        const request = axios.post(`${ROOT_URL}/updateUserData`, {userdata: payload}, {withCredentials: true})
            .then(response => {
                    dispatch(updateUser(response))
            }).catch(error => {
                dispatch(updateUser("Error Occured"))
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

export function getPublicMotBoardAction(){
    return (dispatch) => {
        const request = axios.get(`${ROOT_URL}/getPublicMotboard`, {withCredentials: true})
            .then(response => {
                dispatch(publicMotboards(response.data.boards));
            }).catch(error => {
                // dispatch(signinError());
            });
    }
}

export function postLikesAction(payload){
    return (dispatch) => {
        const request = axios.post(`${ROOT_URL}/postLikes`, payload, {withCredentials: true})
            .then(response => {
                dispatch(publicMotboards(response.data.boards));
            }).catch(error => {
                // dispatch(signinError());
            });
    }
}

export function addPublicBoardToPrivate(payload){
    return (dispatch) => {
        const request = axios.post(`${ROOT_URL}/addPublicBoardToPrivate`, payload, {withCredentials: true})
            .then(response => {
                dispatch(updatedUserBoards(response.data.user));
            }).catch(error => {
                dispatch(updatedUserBoardsError());
            });
    }
}