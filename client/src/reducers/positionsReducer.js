import { GET_POSITIONS } from '../utility/types'

const initState = {
    positionsList: []
}


export default (state = initState, action) => {

    switch (action.type) {
        case GET_POSITIONS:
            return{
                ...state,
                positionsList: action.payload
            }
        
        default:
            return state;
    }
}