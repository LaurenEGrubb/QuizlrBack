const { User, Set } = require('../models')

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
      include: [{ model: Set, as: 'sets' }]
    })
    res.send(userAndSets)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetProfiles,
  GetUserProfile
}
