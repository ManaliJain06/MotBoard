

export default function (state=[],action){

    switch (action.type) {
        case 'GET_BLOGS':
            return action.payload;
        default :
            return state
    }

}

