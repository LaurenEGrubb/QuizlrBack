const { User, Set, Flashcard } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

// const GetFlashcardDetails = async (req, res) => {
//     try {
//       const flashcard = await Flashcard.findByPk(req.params.flashcard_id)
//       res.send(flashcard.req.body)
//     } catch (error) {
//       throw error
//     }
//   }
  const GetFlashcardDetails = async (req, res) => {
    try {
      let flashcardId = parseInt(req.params.flashcard_id)
      let flashcardDetails = await Flashcard.findAll({ where: { id: flashcardId } })
      res.send(flashcardDetails)
    } catch (error) {
      throw error
    }
  }
  
  const CreateFlashcard = async (req, res) => {
    try {
      let setId = parseInt(req.params.set_id)
      let setBody = {
        setId,
        ...req.body
      }
      let flashcard = await Flashcard.create(setBody)
      res.send(flashcard)
    } catch (error) {
      throw error
    }
  }
  
  const UpdateFlashcard = async (req, res) => {
    try {
      let flashcardId = parseInt(req.params.flashcard_id)
      let updatedFlashcard = await Flashcard.update(req.body, {
        where: { id: flashcardId },
       returning: true 
      })
      res.send(updatedFlashcard)
    } catch (error) {
      throw error
    }
  }
  
  const DeleteFlashcard = async (req, res) => {
    try {
      let flashcardId = parseInt(req.params.flashcard_id)
      await Flashcard.destroy({ where: { id: flashcardId } })
      res.send({ message: `Deleted photo with an id of ${flashcardId}`})
    } catch (error) {
      throw error
    }
  }
  
  module.exports = {
    GetFlashcardDetails,
    CreateFlashcard,
    UpdateFlashcard,
    DeleteFlashcard
  }