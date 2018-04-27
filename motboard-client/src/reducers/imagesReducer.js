

export default function (state=[],action){

    switch (action.type) {
        case 'RECEIVED_IMAGES':
            return action.payload;
        default :
            return state
    }

}

