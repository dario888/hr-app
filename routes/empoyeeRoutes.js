const express = require('express');
const Employee = require('../models/Employee');



const router = express.Router();

// GET /api/employees
router.get('/', async(req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
        
    } catch (err) {
        console.log(err);
        res.status(500).json('Internal Server Error')
    }
    
    
})

// POST /api/employees
router.post('/', async(req, res) => {
    
    try {
        const newEmployee = await new Employee(req.body);
        const employee = await newEmployee.save(); //saveing in DB
     
        res.json(employee);

    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error')
    }
    
    
})


// // PUT /api/employees:id   Update
// router.put('/:id', async(req, res) => {
//     try {
//         const newEmployee = await new Employee({req.body})
//         const employee = await newEmployee.save();//saveing in DB

//         res.json(employee)

//     } catch (err) {
//         console.log(err);
//          res.status(500).send('Internal Server Error')
//     }
    
    
// })
// // DELETE /api/employees:id
// router.delete('/:id', async(req, res) => {
//     try {
//         const newEmployee = await new Employee({req.body})
//         const employee = await newEmployee.save();//saveing in DB
//         

//         res.json(employee)

//     } catch (err) {
//         console.log(err);
//          res.status(500).send('Internal Server Error')
//     }
    
    
// })

module.exports = router;