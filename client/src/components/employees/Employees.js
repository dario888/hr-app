import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {getEmployees} from '../../actions/employeesActions'
import EmployeeForm from './EmployeeForm';
import EmployeeTbl from './EmployeeTbl';



const Employee = () => {

    const {employeesList} = useSelector((state) => ({
        employeesList: state.employees.employeesList,
    }));

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getEmployees());

        //eslint-disable-next-line
    }, [])


    return (
        <div className="employeesDiv">
            <EmployeeForm />
            {
                employeesList.length && employeesList.map((employee) => 
                    <EmployeeTbl key={employee._id} employee={employee} />
                
                )
            }

            
        </div>
    )
}

export default Employee
