import React from 'react'

const Alert = ({messageError, displayError}) => {
    return (
        <div className={`divError ${displayError}`}>
            {messageError}
        </div> 
    )
}

export default Alert
