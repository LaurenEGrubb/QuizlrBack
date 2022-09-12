const Router = require('express').Router()
const UserController = require('../controllers/UserController')
const middleware = require('../middleware/index')
const AuthController = require('../controllers/AuthController')
const { Album, Photo, User } = require('../models')


Router.post('/register', async (req, res) => {
        try {
          let { password, username } =
            req.body;
          let passwordDigest = await middleware.hashPassword(
            password,
            process.env.SALT_ROUNDS
          );
          const user = await User.create({
            passwordDigest,
            username
          });
          res.send(user);
        } catch (error) {
          throw error;
        }
      
})
  
Router.post('/login', async (req, res) => {
    try {
        let user = await User.findOne({
          where: { username: req.body.username },
          raw: true
        });
        if (
          user &&
          middleware.comparePassword(user.passwordDigest, req.body.password)
        ) {
          let payload = {
            id: user.id,
            username: user.username
          };
          let token = middleware.createToken(payload);
          return res.send({ user: payload, token });
        }
        res.status(401).send({ status: 'Error', msg: 'Unauthorized' });
      } catch (error) {
        throw error;
      }
    })


Router.get('/', UserController.getAllUsers)
Router.get(
  '/session',
  AuthController.CheckSession
)

Router.get('/:user_id', UserController.getOneUser)

Router.put(
  '/updatepassword',
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
