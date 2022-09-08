const Router = require('express').Router()
const controller = require('../controllers/SetController')

Router.get('/view/setId', controller.GetSetDetails)
Router.post('/:setId', controller.CreateSet)
Router.put('/:setId', controller.UpdateSet)
Router.delete('/:setId', controller.DeleteSet)
// Implement these routes
module.exports = Router
