const mongoose = require('mongoose');



const EmployeeSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },
    
    age: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },
      
    position: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    salary: {
        type: Number,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now   
    },

})

module.exports = mongoose.model('employee', EmployeeSchema);