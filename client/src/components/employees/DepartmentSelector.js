import React, { useState, Fragment} from 'react';
import { useDispatch, useSelector } from 'react-redux' 
import Select from 'react-select';
import {setDepartment} from '../../actions/departmensActons'
import {customStyles} from '../../style/customStyles'


//setDepartment, department
const DepartmentSelector = ({departmentsList }) => {
    
    const [stateValue, setStateValue] = useState(null)

    const {departmentVal, current} = useSelector((state) => ({
        departmentVal: state.departments.department,
        current: state.employees.current
    }))  

    // console.log(stateValue);

    const dispatch = useDispatch();

    // {value: 'HR, label: 'HR}, {value: 'IT, label: 'IT}
    const optionsDepartment = () => {
        let tempArr = [] 
        departmentsList.length && departmentsList.forEach((depart) => tempArr.push({value: depart.name, label: depart.name}))
        // console.log(tempArr);
        return tempArr;

    }

    const handleChange = e => {
        dispatch(setDepartment(e.value));
        setStateValue(e)
    }

    const optionsArr = optionsDepartment()
   
    const curentDept =  current && optionsArr.filter(dep => dep.value === current.department)[0];
    

    return (
        <Fragment>
            <Select options={optionsDepartment()}  placeholder="departments..." isSearchable
            styles={customStyles} onChange={handleChange} 
            value={departmentVal ? stateValue : curentDept ? curentDept : null}  />
        </Fragment>
    )
    
}

export default DepartmentSelector
