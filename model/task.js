const mongoose = require('mongoose');

const TaskSchema =  new mongoose.Schema({
    'name':{
        type:String,
        required:[true,'Name prpperty is required']
    },
    'completed':{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('Task',TaskSchema);