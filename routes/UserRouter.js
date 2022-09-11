const Router = require('express').Router()
const UserController = require('../controllers/UserController')
const middleware = require('../middleware/index')
const AuthController = require('../controllers/AuthController')
const { Album, Photo, User } = require('../models')


Router.post('/register', async (req, res) => {
    try {
      let {  username, password } =
        req.body
      const user = await User.create({
        username,
        password
      })
      res.send(user)
    } catch (error) {
      throw error
    }
  })
  



Router.post('/login', AuthController.Login)
Router.get('/', UserController.getAllUsers)
Router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  AuthController.CheckSession
)

Router.get('/:user_id', UserController.getOneUser)

Router.put(
  '/updatepassword',
  middleware.stripToken,
  middleware.verifyToken,
  AuthController.UpdatePassword
)

Router.delete(
  '/delete',
  middleware.stripToken,
  middleware.verifyToken,
  AuthController.DeleteUser
)

Router.get('/:user_id', UserController.getOneUser)
module.exports = Router
