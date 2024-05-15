const express = require('express');
const {addUser,login} = require('../Controller/userController');
const user_routers = express.Router();

user_routers.post('/',addUser);
user_routers.get('/',login);

module.exports = user_routers;