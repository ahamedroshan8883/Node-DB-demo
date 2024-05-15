const Task = require('../model/task.js');
const createTask = async (req,res)=>{
   console.log('controller')
    try{
        const task = await Task.create(req.body);
        console.log(task);
        res.status(201).json({task});
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}

const getAlltask = async(req,res)=>{
    try{
        const task = await Task.find();
        res.status(200).json(task)
    }catch(error){
        res.status(500).json(error)
    }
}

const getCompletedTasks = async(req,res)=>{
    try{
        const completeTasks = await Task.find({completed:true})
        res.status(200).json(completeTasks);
    }catch(error){
        res.status(500).json(error)
    }
}

module.exports = {createTask,getAlltask,getCompletedTasks};