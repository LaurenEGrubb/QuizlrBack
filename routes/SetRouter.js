const Router = require('express').Router()
const controller = require('../controllers/SetController')

Router.put('/:userId/update/:setid', controller.UpdateSet)
Router.post('/:userId/create', controller.CreateSet)

// Router.delete('/:set_id/delete', controller.DeleteSet)
Router.get('/:set_id/get', controller.GetSetDetails)
// Implement these routes
module.exports = Router
