import axios from 'axios';

import {GET_EMPLOYEE, GET_EMPLOYEES, DELETE_EMPLOYEES, UPDATE_EMPLOYEES, POST_EMPLOYEES, SET_CURRENT, CLEAR_CURRENT } from '../utility/types';


//GET EMPLOYEES
export const getEmployees = () => async(dispatch) => {
    try {
        const res = await axios('/api/employees');
        // console.log(res.data);
        dispatch({type: GET_EMPLOYEES, payload: res.data})

    } catch (error) {
        console.log(error);
    }
}

//GET ONE EMPLOYEE
export const getEmployee = () => async(dispatch) => {
    try {
        const res = await axios('/api/employees');
        // console.log(res.data);
        dispatch({type: GET_EMPLOYEE, payload: res.data})

    } catch (error) {
        console.log(error);
    }
}

//POST EMPLOYEES
export const postEmployees = (employee) => async(dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post('/api/employees', employee, config);
        // console.log(res.data);
        dispatch({type: POST_EMPLOYEES, payload: res.data})

    } catch (error) {
        console.log(error);
    }
}

//UPDATE EMPLOYEES
export const updateEmployees = (employee) => async(dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.put(`/api/employees/${employee._id}`, employee, config );
        // console.log(res.data);
        dispatch({type: UPDATE_EMPLOYEES, payload: res.data})

    } catch (error) {
        console.log(error);
    }
}

//DELETE EMPLOYEES
export const deleteEmployees = (id) => async(dispatch) => {
    try {
        await axios.delete(`/api/employees/${id}`);
        // console.log(res.data);
        dispatch({type: DELETE_EMPLOYEES, payload: id})

    } catch (error) {
        console.log(error);
    }
}

export const getCurrent = (current) => ({type: SET_CURRENT, payload: current}) 

export const clearCurrent = () => ({type: CLEAR_CURRENT}) 


