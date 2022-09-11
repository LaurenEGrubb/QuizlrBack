const { User } = require('../models');
const middleware = require('../middleware');

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.body.username },
      raw: true
    });
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
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
};

const Register = async (req, res) => {
  try {
    let { email, password, name, username } =
      req.body;
    let passwordDigest = await middleware.hashPassword(
      password,
      process.env.SALT_ROUNDS
    );
    const user = await User.create({
      email,
      passwordDigest,
      name,
      username
    });
    res.send(user);
  } catch (error) {
    throw error;
  }
};

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findOne({ where: { username: req.body.username } });
    if (
      user &&
      (await middleware.comparePassword(
        user.dataValues.passwordDigest,
        oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(newPassword);
      await user.update({ passwordDigest });
      return res.send({ status: 'Ok', payload: user });
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' });
  } catch (error) {
    throw error;
  }
};

const CheckSession = async (req, res) => {
  const { payload } = res.locals;
  res.send(payload);
};

const DeleteUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.body.username }
    });

    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      await user.destroy();
      return res.send({ message: 'Deleted this user!' });
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' });
  } catch (error) {
    throw error;
  }
};



module.exports = {
  Login,
  Register,
  UpdatePassword,
  DeleteUser,
  CheckSession
  
};
