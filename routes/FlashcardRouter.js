const Router = require('express').Router()
const controller = require('../controllers/FlashcardController')

Router.get('/view/flashcard_id', controller.GetSetDetails)
Router.post('/:flashcard_id', controller.CreateSet)
Router.put('/:flashcard_id', controller.UpdateSet)
Router.delete('/:flashcard_id', controller.DeleteSet)
// Implement these routes
module.exports = Router
