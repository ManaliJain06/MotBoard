const boardState = {
    boards : []
}

export default function (state=boardState,action){

    switch (action.type) {
        case "PUBLIC_MOTBOARDS":
            const newState  = Object.assign({}, state, { boards: action.boards});
            console.log("new sate for boards is.....",newState);
            return newState;

        default :
            return state;
    }
}



