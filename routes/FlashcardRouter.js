const Router = require('express').Router()
const controller = require('../controllers/FlashcardController')
const { Set, Flashcard, User } = require('../models')



Router.post('/:set_id/create', async (req, res) => {
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
})

Router.get('/:flashcard_id/get', controller.GetFlashcardDetails)

Router.put('/:set_id/create/:flashcard_id/update', controller.UpdateFlashcard)
Router.delete('/:set_id/create/:flashcard_id/delete', controller.DeleteFlashcard)
// Implement these routes
module.exports = Router
