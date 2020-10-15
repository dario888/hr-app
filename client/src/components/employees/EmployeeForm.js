import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {getDepartmens} from '../../actions/departmensActons'
import {getPositions} from '../../actions/positionsActions'
import EmployeeSelect from './EmployeeSelect';



const EmployeeForm = () => {
    
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        age: 0,
        email: '',
        department: '',
        position: '',
        city: '',
        salary: 0,
    })

    const {departmentsList, positionsList} = useSelector(state => ({
        departmentsList: state.departments.departmentsList,
        positionsList: state.positions.positionsList

    }));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDepartmens());
        dispatch(getPositions());
        //eslint-disable-next-line
    },[])

    //Destructoring employee object
    const {firstName, lastName, age, email, department, position,  city, salary} = employee;

    const onChangeHendler = (e) => {
        
    }

    const submitHendler = (e) => {
        e.preventDefault();

       
    }


    return (
        <div className="formDiv">  
            <form className="formEmp" onSubmit={submitHendler}>
                <div className="divUpper">
                    <div className="firstName">
                        <label>First Name</label>
                        <input type="text" required  minLength={2}  maxLength={20}  onChange={onChangeHendler}
                        placeholder="min 2, max 20 chars" />
                    </div>
                    <div className="lastName">
                        <label>Last Name</label>
                        <input type="text" required minLength={2}  maxLength={20} onChange={onChangeHendler}
                        placeholder="min 2, max 20 chars"/>
                    </div>
                    <div className="age">   
                        <label>Age</label>
                        <input type="number" required min={18} max={67} placeholder="Age range 18-67" 
                        onChange={onChangeHendler} />
                    </div>
                    <div className="email">
                        <label>Email</label>
                        <input type="email" required placeholder="Email" onChange={onChangeHendler} />
                    </div>
                </div>
                <div className="divDown">
                    <div className="department">
                        <label>Department</label>
                        <select id="dropdown" onChange={onChangeHendler}>
                            <option value="department">department...</option>
                            {
                                departmentsList.length && departmentsList.map((dept) => 
                                <EmployeeSelect key={dept._id} optionValues={dept.name} /> )
                            }
                            
                         </select>
                    </div>
                    <div className="position">
                        <label>Position</label>
                        <select id="dropdown" onChange={onChangeHendler}>
                            <option value="position">position...</option>
                            {
                                positionsList.length && positionsList.map((position) => 
                                <EmployeeSelect key={position._id} optionValues={position.name} />)
                            }
                            
                         </select>
                    </div>
                    <div className="city">
                        <label>City</label>
                        <input type="text" required placeholder="City" onChange={onChangeHendler} />
                    </div>
                    <div className="salary">
                        <label>Salary</label>
                        <input type="number" className="salaryInp" required value={salary}
                        onChange={onChangeHendler} />
                    </div>
                </div>
                <button type="submit" className="submitBtn">Submit</button>
            </form>            
        </div>
    )
}

export default EmployeeForm;
