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

const GetUserProfile = async (req, res) => {
  try {
    const userAndSets = await User.findByPk(req.params.user_id, {
      include: [{ model: User, as: 'users' }]
    })
    res.send(userAndSets)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetProfiles,
  GetUserProfile,
  CreateUser
}
