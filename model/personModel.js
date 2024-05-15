const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    'name':{
        type:String,
        required:[true,'Name must required']
    },
    'age':{
        type:Number,
        required:[true,'Name must required']
    },
    'address':{
        type:String,
        required:[true,'address must required']
    },
    'city':{
        type:String,
        required:[true,'city must required']
    },
    'nationality':{
        type:String,
        required:[true,'nationality must required']
    }

}) 

module.exports = mongoose.model('person',personSchema);