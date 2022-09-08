const Router = require('express').Router()
const controller = require('../controllers/SetController')

Router.get('/view/set_id', controller.GetSetDetails)
Router.post('/:userId/create', controller.CreateSet)
Router.put('/:set_id', controller.UpdateSet)
Router.delete('/:set_id', controller.DeleteSet)
// Implement these routes
module.exports = Router
