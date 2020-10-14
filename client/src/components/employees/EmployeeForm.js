import React from 'react'



const EmployeeForm = () => {
    return (
        <div className="formDiv">  
            <form className="formEmp">
                <div className="divUpper">
                    <div className="firstName">
                        <label>First Name</label>
                        <input type="text" required  minLength={2}  maxLength={20} 
                        placeholder="min 2, max 20 chars" />
                    </div>
                    <div className="lastName">
                        <label>Last Name</label>
                        <input type="text" required minLength={2}  maxLength={20} 
                        placeholder="min 2, max 20 chars"/>
                    </div>
                    <div className="age">   
                        <label>Age</label>
                        <input type="number" required min={18} max={67} placeholder="Age range 18-67" />
                    </div>
                    <div className="email">
                        <label>Email</label>
                        <input type="email" required placeholder="Email" />
                    </div>
                </div>
                <div className="divDown">
                    <div className="department">
                        <label>Department</label>
                        <input type="text" required />
                    </div>
                    <div className="position">
                        <label>Position</label>
                        <input type="text" required />
                    </div>
                    <div className="city">
                        <label>City</label>
                        <input type="text" required placeholder="City" />
                    </div>
                    <div className="salary">
                        <label>Salary</label>
                        <input type="number" className="salaryInp" required placeholder="Salary"/>
                    </div>
                </div>
            </form>            
        </div>
    )
}

export default EmployeeForm;
