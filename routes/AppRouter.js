const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const SetRouter = require('./SetRouter')
const FlashcardRouter = require('./FlashcardRouter')

Router.use('/user', UserRouter)
Router.use('/sets', SetRouter)
Router.use('/flashcards', FlashcardRouter)
module.exports = Router