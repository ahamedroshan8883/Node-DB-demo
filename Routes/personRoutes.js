const express = require('express');
const {addPerson,getAllperson, getpersonByid, delpersonByid} = require('../Controller/personController')
const person_routes = express.Router();

person_routes.post('/',addPerson);
person_routes.get('/',getAllperson);
person_routes.get('/:id',getpersonByid);
person_routes.delete('/:id',delpersonByid)

module.exports = person_routes;