const mongoose = require('mongoose');

const connectionDB = (url)=>{
    mongoose.set('debug',true);
    console.log('trying to connect to db');
    return mongoose.connect(url)
}

module.exports = connectionDB;