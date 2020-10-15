import React, {Fragment} from 'react'




const EmployeeTbl = ({employeesList}) => {
    return (
        <Fragment>
            <table className="empTable">
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
                    {//React:validateDOMnesting warning (must use ternary intead &&)
                        employeesList.length ? employeesList.map((employee) => 
                        <tr key={employee._id}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.age}</td>
                            <td>{employee.email}</td>
                            <td>{employee.department}</td>
                            <td>{employee.position}</td>
                            <td>{employee.city}</td>
                            <td>{employee.salary}</td>
                            <td>Edt</td>
                            <td>Delete</td>
                        </tr> ) 
                        : null
                    }
                </tbody>
            </table>
        </Fragment>
    )
}

export default EmployeeTbl
