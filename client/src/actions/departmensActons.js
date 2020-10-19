import axios from 'axios';

import {GET_DEPARTMENTS, SET_DEPARTMENT, CLEAR_DEPARTMENT} from '../utility/types';



export const getDepartmens = () => async(dispatch) => {
    try {
        const res = await axios('/api/departments');
        // console.log(res.data);
        dispatch({type: GET_DEPARTMENTS, payload: res.data})

    } catch (error) {
        console.log(error);
    }
}

export const setDepartment = (depart) => ({type: SET_DEPARTMENT, payload: depart})

export const clearDepartment = () => ({type: CLEAR_DEPARTMENT})