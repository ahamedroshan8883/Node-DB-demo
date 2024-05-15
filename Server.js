const express = require('express');
const cors = require('cors');
const task_routes = require('./Routes/taskRoutes');
const person_routes = require('./Routes/personRoutes');

const app = express();
const connectionDB = require('./util/database');
const user_routers = require('./Routes/userRouter');
const blog_router = require('./Routes/blogRoutes');
const errorHandler = require('./error/error-handler');
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(errorHandler)


const start = async()=>{
    try{
        await connectionDB(process.env.MONGO_URL);
        console.log('connected');
        app.listen(8081,()=>{
            console.log('Server running on port : 8081');
        });
    }catch(error){
        console.log((error));
    }
}
start();
app.use('/task', task_routes);
app.use('/person',person_routes);
app.use('/users',user_routers)
app.use('/blog',blog_router)