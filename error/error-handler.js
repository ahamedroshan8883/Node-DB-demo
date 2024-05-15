const customApiError = require('./customApiError');

const errorHandler = (err,res)=>{
    if(err instanceof customApiError)
    res.status(err.statusCode).json({msg:err.message});
    else res.status(500).json({msg:err.message})
};
module.exports = errorHandler;