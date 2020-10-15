import {GET_EMPLOYEES, POST_EMPLOYEES} from '../utility/types'


const initState = {
    employeesList: []
}


export default (state = initState, action) => {

    switch (action.type) {
        
        case GET_EMPLOYEES:
            return{
                ...state,
                employeesList: action.payload
            }

        case POST_EMPLOYEES:
            return{
                ...state,
                employeesList: [action.payload, ...state.employeesList]
            }
        
        default:
            return state;
    }
}