import {GET_EMPLOYEES, POST_EMPLOYEES, SET_CURRENT, CLEAR_CURRENT, UPDATE_EMPLOYEES, DELETE_EMPLOYEES} from '../utility/types'


const initState = {
    employeesList: [],
    current: null
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

        case UPDATE_EMPLOYEES:
        return {
            ...state,
            employeesList: state.employeesList.map((employee) => employee._id === action.payload._id 
            ? action.payload 
            : employee )

        };
        
        case DELETE_EMPLOYEES:
        return {
            ...state,
            employeesList: state.employeesList.filter((employee) => employee._id !== action.payload)

        };
        
        case SET_CURRENT:
            return{
                ...state,
                current: action.payload
            }

        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        
        default:
            return state;
    }
}