import axios from 'axios';

import {GET_POSITIONS} from '../utility/types';





export const getPositions = () => async(dispatch) => {
    try {
        const res = await axios('/api/positions');
        // console.log(res.data);
        dispatch({type: GET_POSITIONS, payload: res.data})

    } catch (error) {
        console.log(error);
    }
}