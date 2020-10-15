const mongoose = require('mongoose');



const PositionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },


    department: {
        type: String,
        required: true
    },
   

})

module.exports = mongoose.model('position', PositionSchema);