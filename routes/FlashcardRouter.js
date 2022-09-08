const Router = require('express').Router()
const controller = require('../controllers/FlashcardController')

Router.get('/view/flashcard_id', controller.GetFlashcardDetails)
Router.post('/:set_id/create', controller.CreateFlashcard)
Router.put('/:flashcard_id', controller.UpdateFlashcard)
Router.delete('/:flashcard_id', controller.DeleteFlashcard)
// Implement these routes
module.exports = Router
