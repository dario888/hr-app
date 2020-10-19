import { GET_POSITIONS, SET_POSITION, CLEAR_POSITION } from '../utility/types'

const initState = {
    positionsList: [],
    position: null
}


export default (state = initState, action) => {

    switch (action.type) {
        case GET_POSITIONS:
            return{
                ...state,
                positionsList: action.payload
            }

        case SET_POSITION:
            return{
                ...state,
                position: action.payload
            }
            
        case CLEAR_POSITION:
            return{
                ...state,
                position: null
            }
        
        default:
            return state;
    }
}