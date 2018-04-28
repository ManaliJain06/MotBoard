const loginState = {
    'isLogged' : false,
    'firstName' : '',
    'userData' : '',
    'error': false,
    'msg': ''
};

export default function (state=loginState,action){

    switch (action.type) {
        case "SIGNIN_SUCCESSFUL":
            // const newState = loginStatusState;
            // console.log("at reducer",action.user);
            const newState  = Object.assign({}, state, { isLogged: action.flag ,
                firstName: action.user.firstname, userData:action.user});
            console.log("new sate",newState);
            return newState;

        case "SIGNIN_FAILED":
            const failedState  = Object.assign({}, state, { isLogged: false ,
                error:true});
            return failedState;

        case "SIGNUP_FAILED":
            const errorMsg  = Object.assign({}, state, {msg:action.msg});
            return errorMsg;

        default :
            return state;
    }

}



