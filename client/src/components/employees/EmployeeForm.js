import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {getDepartmens} from '../../actions/departmensActons'
import {getPositions} from '../../actions/positionsActions'
import {getEmployees, postEmployees, updateEmployees, clearCurrent} from '../../actions/employeesActions'
import EmployeeSelect from './EmployeeSelect';



const EmployeeForm = () => {
    
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        department: '',
        position: '',
        city: '',
        salary: '',
    })

    //Destructoring employee object
    const {firstName, lastName, age, email, city, salary} = employee;

    const {departmentsList, positionsList, currentEmployee} = useSelector(state => ({
        departmentsList: state.departments.departmentsList,
        positionsList: state.positions.positionsList,
        currentEmployee: state.employees.current,

    }));

    // console.log(currentEmployee);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDepartmens());
        dispatch(getPositions());

        //eslint-disable-next-line
    },[])

    useEffect(() => {
        dispatch(getEmployees())
        

        // eslint-disable-next-line
    }, [employee]);

    // When current is change update employee in useState
    useEffect(() => {
        if(currentEmployee){
            setEmployee(currentEmployee)
        } 
       
        // eslint-disable-next-line
    }, [currentEmployee]);

   

    //Setting  Employee fields 
    const onChangeHendler = (e) => setEmployee({ ...employee, [e.target.name]: e.target.value});


    const submitHendler = (e) => {
        e.preventDefault();
        // console.log(employee);
        // Parse from string to number
        employee.age = Number(employee.age); 
        employee.salary = Number(employee.salary);

        if(currentEmployee){
            dispatch(updateEmployees(employee))
            dispatch(clearCurrent())

        } else {
            dispatch(postEmployees(employee));
            setEmployee({firstName:'', lastName:'', age:'', email:'', city:'', salary:''});

        }
       
       
    }


    return (
        <div className="formDiv">  
            <form className="formEmp" onSubmit={submitHendler}>
                <div className="divUpper">
                    <div className="firstName">
                        <label>First Name</label>
                        <input type="text" name="firstName" value={firstName} minLength={2}  maxLength={20}  
                        onChange={onChangeHendler} placeholder="min 2, max 20 chars" required  />
                    </div>
                    <div className="lastName">
                        <label>Last Name</label>
                        <input type="text" name="lastName" value={lastName} minLength={2}  maxLength={20} 
                        onChange={onChangeHendler} placeholder="min 2, max 20 chars" required/>
                    </div>
                    <div className="age">   
                        <label>Age</label>
                        <input type="number" name="age"  value={age} min={18} max={67} 
                        placeholder="age range 18-67" onChange={onChangeHendler} required />
                    </div>
                    <div className="email">
                        <label>Email</label>
                        <input type="email" name="email" value={email} placeholder="Email" 
                        onChange={onChangeHendler} required />
                    </div>
                </div>
                <div className="divDown">
                    <div className="department">
                        <label>Department</label>
                        <select id="dropdown" name="department" onChange={onChangeHendler} required>
                             <option value="department" >department...</option>
                            {
                                departmentsList.length && departmentsList.map((dept) => 
                                <EmployeeSelect key={dept._id} optionValues={dept.name} /> )
                            }
                            
                         </select>
                    </div>
                    <div className="position">
                        <label>Position</label>
                        <select id="dropdown2" name="position" onChange={onChangeHendler} required>
                            <option value="position" id="defaultOpt">position...</option>
                            {
                                positionsList.length && positionsList.map((position) => 
                                <EmployeeSelect key={position._id} optionValues={position.name} />)
                            }                        
                         </select>
                    </div>
                    <div className="city">
                        <label>City</label>
                        <input type="text" name="city" value={city} placeholder="City"
                        onChange={onChangeHendler} required/>
                    </div>
                    <div className="salary">
                        <label>Salary</label>
                        <input type="number" name="salary" value={salary} className="salaryInp" required
                        onChange={onChangeHendler} min={1}  placeholder="amount..." />
                    </div>
                </div>
                <button type="submit" className="submitBtn">Submit Employee</button>
            </form>            
        </div>
    )
}

export default EmployeeForm;
