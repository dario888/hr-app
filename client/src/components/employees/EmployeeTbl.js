import React, {Fragment} from 'react'
import { useDispatch } from 'react-redux'

import { getCurrent, deleteEmployees } from '../../actions/employeesActions'




const EmployeeTbl = ({employee}) => {

    const dispatch = useDispatch();

    //React:validateDOMnesting warning (must use ternary intead &&)

    return (
        <Fragment>  
            <tr >
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.age}</td>
                <td>{employee.email}</td>
                <td>{employee.department}</td>
                <td>{employee.position}</td>
                <td>{employee.city}</td>
                <td>{employee.salary}</td>
                <td>
                    <button id="empEditBtn" type="button" onClick={() => dispatch(getCurrent(employee))}>
                        Edit
                    </button>
                </td>
                <td>
                    <button id="empDeleteBtn" type="button" onClick={() => 
                        dispatch(deleteEmployees(employee._id))} >
                        Delete
                    </button>
                </td>
            </tr> 
        </Fragment>
    )
}

export default EmployeeTbl
