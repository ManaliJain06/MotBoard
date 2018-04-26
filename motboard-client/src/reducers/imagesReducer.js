

export default function (state=null,action){

    switch (action.type) {
        case 'RECEIVED_IMAGES':
            return action.payload;
        default :
            return state
    }

}

