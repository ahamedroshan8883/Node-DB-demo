const Person = require('../model/personModel');

const addPerson  = async (req,res)=>{
    try{
       const person =  await Person.create(req.body);
       res.status(200).json({person});
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}

const getAllperson = async (req,res)=>{
    try{
    const person = await Person.find();
        res.status(200).json(person);
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}
const getpersonByid  = async(req,res)=>{
    try{
        const person = await Person.findById({_id:req.params.id});
        res.status(200).json(person);
    }catch(error){
        res.status(500).json(error);
    }
}
const delpersonByid  = async(req,res)=>{
    try{
        const person = await Person.findByIdAndDelete({_id:req.params.id});
        res.status(200).json(person);
    }catch(error){
        res.status(500).json(error);
    }
}
module.exports = {addPerson,getAllperson,getpersonByid,delpersonByid};