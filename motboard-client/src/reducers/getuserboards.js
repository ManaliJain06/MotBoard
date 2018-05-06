

export default function (state=[],action){

    switch (action.type) {
        case 'ALL_USER_MOTBOARDS':
            return action.payload;
        default :
            return state
    }

}

