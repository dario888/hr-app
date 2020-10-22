import React, {Fragment, useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {getDepartmens, clearDepartment} from '../../actions/departmensActons'
import {getPositions, clearPosition} from '../../actions/positionsActions'
import {postEmployees, updateEmployees, clearCurrent} from '../../actions/employeesActions'
import PositionSelector from './PositionSelector';
import DepartmentSelector from './DepartmentSelector';
import Alert from '../Alert';




const EmployeeForm = () => {
    
    const dispatch = useDispatch();
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

    const [messageError, setMessageError] = useState('');
    const [displayError, setDisplayError] = useState('');
    const [toggleInputs, setToggleInputs] = useState({toggleFn: false, toggleLn: false, toggleCity: false, });

    //Destructoring objects
    const {firstName, lastName, age, email, department, position, city, salary} = employee;
    const {toggleFn, toggleLn, toggleCity} = toggleInputs;

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
        if(!messageError){
            setDisplayError('');        
        }
      
        // eslint-disable-next-line
    }, [messageError]);

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

    const testError = (msg) => {
        setMessageError(msg);
        setTimeout(() => {
            setDisplayError('displayNone')
            setMessageError('')
            setToggleInputs({toggleFn: false, toggleLn: false, toggleCity: false, })
        
        },3000)    
        
    };
   
    //Setting  Employee fields 
    const onChangeHendler = (e) => setEmployee({ ...employee, [e.target.name]: e.target.value});

    //Submiting the form
    const submitHendler = (e) => {
        e.preventDefault();
        // Parse from string to number
        if(age && salary){
            employee.age = Number(employee.age); 
            employee.salary = Number(employee.salary);
        }
        if(!department)return testError('Please enter Department.')
        
        if(!position)return testError('Please enter Position.')
        

        if(/[^a-zA-Z]/gi.test(firstName) ) {
            setEmployee({...employee, firstName: ''});
            setToggleInputs({...toggleInputs, toggleFn: true})
            return testError('Please enter only latters, exclude: characters, numbers, spaces.')
    
        } else if( /^[a-z]/g.test(firstName)){
            setToggleInputs({...toggleInputs, toggleFn: true})
            return testError('The first character should be Upper case.')
        }
    
        if(/[^a-zA-Z]/gi.test(lastName)) {
            setEmployee({...employee, lastName: ''});
            setToggleInputs({...toggleInputs, toggleLn: true})
            return testError('Please enter only latters, exclude: characters, numbers, spaces.')
    
        } else if( /^[a-z]/g.test(lastName)){
            setToggleInputs({...toggleInputs, toggleLn: true})
            return testError('The first character should be Upper case.')
        }
    
        if(/[^a-zA-Z]/gi.test(city) ) {
            setEmployee({...employee, city: ''});  
            setToggleInputs({...toggleInputs, toggleCity: true});        
            return testError('Please enter only latters, exclude: characters, numbers, spaces.')
    
        } else if( /^[a-z]/g.test(city)){
            setToggleInputs({...toggleInputs, toggleCity: true});
            return testError('The first character should be Upper case.')
        }
        

        if(currentEmployee){
            dispatch(updateEmployees(employee));
            dispatch(clearCurrent());
           
        } else {
            dispatch(postEmployees(employee));
            setEmployee({firstName:'', lastName:'', age:'', email:'', department: '', position:'', city:'', salary:''});

            dispatch(clearDepartment());
            dispatch(clearPosition());

        } 
       
    }

    // console.log('Gobal:',employee);
    // console.log('State Msg:', messageError);
    // console.log('First Name:', toggleFn);
    // console.log('Last Name:', toggleLn);
    


    return (
        <Fragment>
        <div className="formDiv">  
            <form className="formEmp" onSubmit={submitHendler}>
                <div className="divUpper">
                    <div className="firstName">
                        <label>First Name</label>
                        <input type="text" name="firstName" value={firstName} minLength={2} maxLength={20} 
                        onChange={onChangeHendler} placeholder="min 2, max 20 chars" required  />
                        { messageError && toggleFn ? <Alert messageError={messageError} displayError={displayError} /> : null}
                    </div>
                    <div className="lastName">
                        <label>Last Name</label>
                        <input type="text" name="lastName" value={lastName} minLength={2} maxLength={20} required
                        onChange={onChangeHendler} placeholder="min 2, max 20 chars" />
                        {messageError && toggleLn ? <Alert messageError={messageError} displayError={displayError} /> : null}
                    </div>
                    <div className="age">   
                        <label>Age</label>
                        <input type="number" name="age" value={age} min={18} max={67} 
                        placeholder="age range 18-67" onChange={onChangeHendler} required />
                    </div>
                    <div className="email">
                        <label>Email</label>
                        <input type="email" name="email" value={email} placeholder="Email" required
                        onChange={onChangeHendler}  />
                    </div>
                </div>
                <div className="divDown">
                    <div className="department">
                        <label>Department</label>
                        <DepartmentSelector departmentsList={departmentsList} />
                        { messageError && !department ? <Alert messageError={messageError} displayError={displayError} /> : null}
                    </div>
                    <div className="position">
                        <label>Position</label>
                        <PositionSelector positionsList={positionsList} />
                        { messageError && !position ? <Alert messageError={messageError} displayError={displayError} /> : null}
                    </div>
                    <div className="city">
                        <label>City</label>
                        <input type="text" name="city" value={city} placeholder="select city..." required
                        onChange={onChangeHendler} />
                        { messageError && toggleCity ? <Alert messageError={messageError} displayError={displayError} /> : null}
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
        </Fragment>
    )
}

export default EmployeeForm;
