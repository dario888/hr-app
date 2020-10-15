import { GET_DEPARTMENTS} from '../utility/types'

const initState = {
    departmentsList: []
}


export default (state = initState, action) => {

    switch (action.type) {
        case GET_DEPARTMENTS:
            return{
                ...state,
                departmentsList: action.payload
            }
        
        default:
            return state;
    }
}