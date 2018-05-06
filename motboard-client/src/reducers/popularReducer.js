

export default function (state=[],action){
    switch (action.type) {
        case 'POPULAR_MOTBOARDS':
            console.log(action.payload);
            return action.payload;
        default :
            return state
    }
}

