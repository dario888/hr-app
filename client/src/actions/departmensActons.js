import axios from 'axios';

import {GET_DEPARTMENTS} from '../utility/types';



export const getDepartmens = () => async(dispatch) => {
    try {
        const res = await axios('/api/departments');
        // console.log(res.data);
        dispatch({type: GET_DEPARTMENTS, payload: res.data})

    } catch (error) {
        console.log(error);
    }
}