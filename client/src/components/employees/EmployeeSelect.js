import React, {Fragment} from 'react'




const EmployeeSelect = ({optionValues}) => {
    return (
        <Fragment>
            <option value={optionValues}>{optionValues}</option>
        </Fragment>
    )
}

export default EmployeeSelect
