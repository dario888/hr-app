import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Typed from 'react-typed'

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
    }, []);

    // useEffect(() => {!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //     dispatch(getEmployees());

    //     //eslint-disable-next-line
    // }, [employeesList]);



    const displayTbl = employeesList.length > 0 ? 'displayTbl' : null;

    return (
        <div className={`employeesDiv ${displayTbl}`}>
            <EmployeeForm />  

            {
                displayTbl 
                ? <table className="empTable">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Department</th>
                                <th>Position</th>
                                <th>City</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody className="empTblBody">                
                            {
                                employeesList.length ? employeesList.map((employee) => 
                                    <EmployeeTbl key={employee._id} employee={employee} />
                                
                                ) : null
                            }
                        </tbody>
                        
                    </table> 
                    : <div id="typed">
                      <h1>
                          {/* <Typed strings={['Your list is empty, Please insert Employee']} typeSpeed={30}/> */}
                      </h1>
                    </div>
                     
            }        
   
        </div>
    )
}

export default Employee
