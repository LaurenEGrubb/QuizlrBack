const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetProfiles)
Router.get('/:user_id', controller.GetUserById)
Router.post('/register', controller.CreateUser)
module.exports = Router
