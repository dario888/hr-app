const express = require('express');
const Department = require('../models/Department');


const router = express.Router();



// GET /api/departments ALL DEPARTMENTS
router.get('/', async(req, res) => {
    try {
        const departments = await Department.find();
        res.json(departments);
        
    } catch (err) {
        console.log(err);
        res.status(500).json('Internal Server Error')
    }
    
    
})

module.exports = router;