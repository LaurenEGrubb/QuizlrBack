const { User, Set, Flashcard } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const GetSetDetails = async (req, res) => {
    try {
      const set = await Set.findByPk(req.params.set_id)
      res.send(set)
    } catch (error) {
      throw error
    }
  }
  
  const CreateSet = async (req, res) => {
    try {
      let userId = parseInt(req.params.user_id)
      let SetBody = {
        userId,
        ...req.body
      }
      let set = await Set.create(setBody)
      res.send(set)
    } catch (error) {
      throw error
    }
  }
  
  const UpdateSet = async (req, res) => {
    try {
      let setId = parseInt(req.params.set_id)
      let updatedSet = await Set.update(req.body, {
        where: { id: setId },
       returning: true 
      })
      res.send(updatedSet)
    } catch (error) {
      throw error
    }
  }
  
  const DeleteSet = async (req, res) => {
    try {
      let setId = parseInt(req.params.set_id)
      await Set.destroy( {  where: { id: setId }})
      res.send({ message: `Deleted set with an id of ${setId}`})
    } catch (error) {
      throw error
    }
  }
  
  module.exports = {
    GetSetDetails,
    CreateSet,
    UpdateSet,
    DeleteSet
  }
  