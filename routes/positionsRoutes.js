const express = require('express');
const Position = require('../models/Position');


const router = express.Router();



// GET /api/positions ALL POSITIONS
router.get('/', async(req, res) => {
    try {
        const position = await Position.find();
        res.json(position);
        
    } catch (err) {
        console.log(err);
        res.status(500).json('Internal Server Error')
    }
    
    
})

module.exports = router;