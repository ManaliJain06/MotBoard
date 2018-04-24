const loginState = {
    'isLoggedin' : false,
    'username' : ''
};

export default function (state=loginState,action){

    switch (action.type) {
        case "SIGNUP_SUCCESSFULL":
            return action.payload;
        default :
            return state
    }

}

