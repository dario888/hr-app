import React, {useState, Fragment} from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux'  
import {setPosition} from '../../actions/positionsActions'




const PositionSelector = ({positionsList}) => {

    const [stateValue, setStateValue] = useState(null)

    const {positionVal, current} = useSelector((state) => ({
        positionVal: state.positions.position,
        current: state.employees.current
    }))  

    const dispatch = useDispatch();
    

    function optionsPositions() {
        let tempArr = [];
        let arrIT = [];
        let arrFinance = [];
        let arrMarketing = [];
        let arrHR = [];

        let objIT = {label:'IT'};
        let objFinance = {label: 'Finance'};
        let objHR = {label: 'HR'};
        let objMarketing = {label: 'Marketing'};//  positionState && positionState

        positionsList && positionsList.forEach(obj => {
            
            if(obj.department === 'IT'){
                arrIT.push({value:obj.name, label:obj.name})    
                objIT.options = arrIT; 
                
            }else if(obj.department === 'Finance'){
                arrFinance.push({value:obj.name, label:obj.name})       
                objFinance.options = arrFinance; 
                   
            } else if(obj.department === 'Marketing'){
                arrMarketing.push({value:obj.name, label:obj.name})                       
                objMarketing.options = arrMarketing; 
              
            } else if(obj.department === 'HR'){
                arrHR.push({value:obj.name, label:obj.name})                       
                objHR.options = arrHR;                
            }          
            
        })
  
        tempArr.push(objIT, objFinance, objHR, objMarketing)  
        return tempArr;

    }

    const handleChange = e => {
        dispatch(setPosition(e.value));
        setStateValue(e)
    }

    const optionsArr = optionsPositions()
   //     {
    //         label: 'IT',
    //         options:[{value:'Web Developer', label:'Web Developer'}]
    //     },
    const currentPosition = current && optionsArr.map(pos => 
        pos.options.filter(p => p.value === current.position)).filter(a=> a.length > 0 )[0][0]

    // console.log(current &&current.position);
    // console.log(currentPosition);


    return (
        <Fragment>
            <Select options={optionsPositions()}  placeholder="positions... " className="selectOptions"
            onChange={handleChange} isSearchable
            value={positionVal ? stateValue : currentPosition ? currentPosition : null} />
        </Fragment>
    )
}

export default PositionSelector

