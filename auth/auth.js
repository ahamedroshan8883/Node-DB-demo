const jwt = require('jsonwebtoken');
const customApiError = require('../error/customApiError');
const authMiddleWare = async(req,res,next)=>{
    const authHeader = req.headers.authorization;

    console.log(authHeader);
    if(!authHeader || !authHeader.startsWith('Bearer')){
        next(new customApiError('Not Authorization',401))
    }
    try{
        const token = authHeader.split(" ")[1];
        // console.log(token);
        // console.log(token);
        const decoded = jwt.verify(token,process.env.JSON_SECRETKEY);
        const {email,username,role} = decoded;
        req.user = {email,username,role}
        next()
    }catch(error){
        console.log(error);
        next(new customApiError('Not a vaild token',401))
    }
}
module.exports = authMiddleWare;