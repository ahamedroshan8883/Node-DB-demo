const express = require('express')
const {createTask,getAlltask,getCompletedTasks} = require('../Controller/taskController');
const task_routes = express.Router();

// task_routes.post('/',()=>{
//     console.log('routes')
// });
task_routes.post('/', createTask )

task_routes.get('/completed', getCompletedTasks )


task_routes.get('/',getAlltask);


module.exports = task_routes;