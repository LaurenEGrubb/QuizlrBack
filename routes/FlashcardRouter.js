const Router = require('express').Router()
const controller = require('../controllers/FlashcardController')



Router.get('/:flashcard_id/get', controller.GetFlashcardDetails)
Router.post('/:set_id/create', controller.CreateFlashcard)
Router.put('/:set_id/create/:flashcard_id/update', controller.UpdateFlashcard)
Router.delete('/:set_id/create/:flashcard_id/delete', controller.DeleteFlashcard)
// Implement these routes
module.exports = Router
