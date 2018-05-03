const loginState = {
    'isLogged' : false,
    'firstName' : '',
    'userData' : '',
    'error': false,
    'msg': '',
    'profileURL': '',
    'profileURLError': false,
    'updateError': '',
    'signOutError': ''
};

export default function (state=loginState,action){

    switch (action.type) {
        case "SIGNIN_SUCCESSFUL":
            // const newState = loginStatusState;
            // console.log("at reducer",action.user);
            const newState  = Object.assign({}, state, { isLogged: action.flag ,
                firstName: action.user.firstname, userData:action.user, error:false});
            console.log("new sate",newState);
            return newState;

        case "SIGNIN_FAILED":
            const failedState  = Object.assign({}, state, { isLogged: false ,
                error:true});
            return failedState;

        case "SIGNUP_FAILED":
            const errorMsg  = Object.assign({}, state, {msg:action.msg});
            return errorMsg;

        case "UPDATE_USER_PROFILE_PiC":
            const updateUserProfile = Object.assign({}, state, {profileURL:action.response.fileURL,
                profileURLError:false});
            return updateUserProfile;

        case "UPDATE_USER_PROFILE_PIC_ERROR":
            const updateUserProfileError = Object.assign({}, state, {profileURLError:true});
            return updateUserProfileError;

        case "UPDATE_USER_PROFILE":
            const updateUser =  Object.assign({}, state, { userData:action.user, updateError:false});
            return updateUser;

        case "UPDATE_USER_PROFILE_ERROR":
            const updateUserError = Object.assign({}, state, {updateError:true});
            return updateUserError;

        case "SIGNOUT_SUCCESSFUL":
            const signOutObject =  Object.assign({},state, {isLogged:false,
                firstName: '', userData: '', error:false, msg: '',profileURL: '',
                profileURLError: false,updateError: '',signOutError:false});
            return signOutObject;

        case "SIGNOUT_ERROR":
            return Object.assign({},state, {signOutError:true});

        default :
            return state;
    }
}



