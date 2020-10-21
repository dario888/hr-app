import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {getDepartmens, clearDepartment} from '../../actions/departmensActons'
import {getPositions, clearPosition} from '../../actions/positionsActions'
import {getEmployees, postEmployees, updateEmployees, clearCurrent} from '../../actions/employeesActions'
import PositionSelector from './PositionSelector';
import DepartmentSelector from './DepartmentSelector';

// import EmployeeSelect from './EmployeeSelect';



const EmployeeForm = () => {
    
    // const [department, setDepartment] = useState(null);
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

    const {departmentsList, positionsList, currentEmployee, departmentVal, positionVal} = useSelector(state => ({
        departmentsList: state.departments.departmentsList,
        departmentVal: state.departments.department,
        positionVal: state.positions.position,
        positionsList: state.positions.positionsList,
        currentEmployee: state.employees.current,

    }));

    // console.log(currentEmployee);
    // console.log(employee);
    // console.log(departmentVal);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDepartmens());
        dispatch(getPositions());

        //eslint-disable-next-line
    },[])

    // Set departmentEmployee if department has value
    useEffect(() => {
        if(departmentVal){
            setEmployee({...employee, department: departmentVal})
        }

        if(positionVal){
            setEmployee({...employee, position: positionVal})
        }
        
        // eslint-disable-next-line
    }, [departmentVal, positionVal]);
   
    useEffect(() => {
        dispatch(getEmployees())
        
        // eslint-disable-next-line
    }, [employee]);

    // When current is change update employee in useState
    useEffect(() => {
        if(currentEmployee){
            setEmployee(currentEmployee)

        } else{
            setEmployee({firstName:'', lastName:'', age:'', email:'', department: '', position:'', city:'', salary:''});
            dispatch(clearDepartment());
            dispatch(clearPosition());
        }
       
        // eslint-disable-next-line
    }, [currentEmployee]);

   

    //Setting  Employee fields 
    const onChangeHendler = (e) => setEmployee({ ...employee, [e.target.name]: e.target.value});


    const submitHendler = (e) => {
        e.preventDefault();
        // Parse from string to number
        employee.age = Number(employee.age); 
        employee.salary = Number(employee.salary);

        if(currentEmployee){
            // console.log(employee);
            dispatch(updateEmployees(employee));
            dispatch(clearCurrent());
           

        } else {
            dispatch(postEmployees(employee));
            setEmployee({firstName:'', lastName:'', age:'', email:'', department: '', position:'', city:'', salary:''});

            dispatch(clearDepartment());
            dispatch(clearPosition());

            // console.log(employee);
        } 
       
    }

    return (
        <div className="formDiv">  
            <form className="formEmp" onSubmit={submitHendler}>
                <div className="divUpper">
                    <div className="firstName">
                        <label>First Name</label>
                        <input type="text" name="firstName" value={firstName} minLength={2} maxLength={20}  
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
                        <DepartmentSelector departmentsList={departmentsList}  />
                    </div>
                    <div className="position">
                        <label>Position</label>
                        <PositionSelector  positionsList={positionsList} />
                    </div>
                    <div className="city">
                        <label>City</label>
                        <input type="text" name="city" value={city} placeholder="select city..."
                        onChange={onChangeHendler} required/>
                    </div>
                    <div className="salary">
                        <label>Salary</label>
                        <input type="number" name="salary" value={salary} className="salaryInp" required
                        onChange={onChangeHendler} min={1}  placeholder="amount..." />
                    </div>
                </div>
                <button type="submit" className="submitBtn">
                    {currentEmployee ? 'Update Employee' : 'Submit Employee'}
                </button>
            </form>            
        </div>
    )
}

export default EmployeeForm;
