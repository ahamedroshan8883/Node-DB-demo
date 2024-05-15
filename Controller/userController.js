const customApiError = require('../error/customApiError');
const User = require('../model/UserModel');
const jwt = require('jsonwebtoken')

const addUser = async(req,res)=>{
    try{
        req.body.role="user";
        const user = await User.create(req.body);
        res.status(200).json({user});
    }catch(error){

        console.log(error);
    }   
}
const login = async(req,res,next)=>{
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email:email,password:password});
        if(!user) res.status(401).json({msg:"Invalid email/password"});
        else{
            const {email,username,role} = user;
            const token = jwt.sign({email,username,role},process.env.JSON_SECRETKEY,{expiresIn:'1800s'});
            res.status(200).json(token)
        }
    }catch(error){
        console.log(error);
        next(new customApiError(error.message, 500))
    }
}

module.exports = {addUser,login};