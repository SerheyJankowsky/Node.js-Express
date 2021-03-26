const Router = require('express')
const AdminController = require('../Controller/AdminController')


const arout = new Router

arout.get('/admin/:id',AdminController.Login)
arout.get('/admin',AdminController.GetUsser)
arout.post('/admin',AdminController.CreateUsser)


module.exports = arout