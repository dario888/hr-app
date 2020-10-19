import { GET_DEPARTMENTS, SET_DEPARTMENT, CLEAR_DEPARTMENT} from '../utility/types'

const initState = {
    departmentsList: [],
    department: null
}


export default (state = initState, action) => {

    switch (action.type) {
        case GET_DEPARTMENTS:
            return{
                ...state,
                departmentsList: action.payload
            }

        case SET_DEPARTMENT:
            return{
                ...state,
                department: action.payload
            }
        
        case CLEAR_DEPARTMENT:
            return{
                ...state,
                department: null
            }
        
        default:
            return state;
    }
}