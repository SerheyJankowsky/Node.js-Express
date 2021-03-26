const Router = require('express')
const postController = require('../Controller/postController')
const authMiddleware = require('../Middleware/authMiddleware')

const rout = new Router

rout.get('/post',postController.GetAll )
rout.get('/post/:id',postController.GetOne)
rout.post('/post',postController.Create)
rout.put('/post',postController.Update)
rout.delete('/post/:id',postController.Delete)


module.exports = rout