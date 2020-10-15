const express = require('express');
const Employee = require('../models/Employee');



const router = express.Router();

// GET /api/employees ALL EMPLOYEES
router.get('/', async(req, res) => {
    try {
        const employees = await Employee.find().sort({createdAt: -1});
        res.json(employees);
        
    } catch (err) {
        console.log(err);
        res.status(500).json('Internal Server Error')
    }
    
    
})

// GET /api/employees/id   ONE EMPLOYEE
router.get('/:id', async(req, res) => {
    try {
        const employees = await Employee.findById(req.params.id);
        res.json(employees);
        
    } catch (err) {
        console.log(err);
        res.status(500).json('Internal Server Error')
    }
    
    
})

// POST /api/employees
router.post('/', async(req, res) => {
    const {firstName, lastName, age, email, department, position, city, salary} = req.body;

    try {
        const newEmployee = await new Employee({
            firstName, 
            lastName, 
            age, 
            email, 
            department, 
            position, 
            city, 
            salary
        });
        const employee = await newEmployee.save(); //saveing in DB
     
        res.status(201).json(employee);

    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error')
    }
    
    
})

// PUT /api/employees:id   Update
router.put('/:id', async(req, res) => {
    try {
        const employee = await Employee.findById(req.params.id)
        if(!employee)return res.status(404).json({msg: 'Employee Not Found!'});

        const employeeUpdated = await Employee.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.json(employeeUpdated);

    } catch (err) {
        console.log(err);
         res.status(500).send('Internal Server Error')
    }
    
    
})

// DELETE /api/employees/:id
router.delete('/:id', async(req, res) => {
    try {
       
        const employeeDelete = await Employee.findById(req.params.id)
        if(!employeeDelete)return res.status(404).json({msg: 'Employee Not Found!'});

        await Employee.findByIdAndRemove(req.params.id)
        res.json({msg: 'Employee Remove'})

    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error')
    }
    
    
})

module.exports = router;