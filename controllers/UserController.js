const { User, Set } = require('../models')


const CreateUser = async (req, res) => {
    try {
      let userId = parseInt(req.params.user_id)
      let userBody = {
        userId,
        ...req.body
      }
      let user = await User.create(userBody)
      res.send(user)
    } catch (error) {
      throw error
    }
  }
const GetProfiles = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUserById = async (req, res) => {
    try {
      let userId = parseInt(req.params.user_id)
      let user = await User.findAll({
        where: { id: userId }
      })
      res.send(user)
    } catch (error) {
      throw error
    }
  }

module.exports = {
  GetProfiles,
  GetUserById,
  CreateUser
}
