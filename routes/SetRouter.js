const Router = require('express').Router()
const controller = require('../controllers/SetController')
const { Set, Flashcard, User } = require('../models')


Router.post('/:userId/create', async (req, res) => {
 try {
    let userId = parseInt(req.params.user_id)
    let SetBody = {
      userId,
      ...req.body,
      setId: req.query.userId,
      setId: req.query.setname
    }
    let set = await Set.create(SetBody)
    res.send(set)
  } catch (error) {
    throw error
  }
})

Router.put('/:userId/update/:setid', async (req, res) => {
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
)
Router.get('/:set_id/get', async (req, res) => {
    try {
        const set = await Set.findByPk(req.params.set_id)
        res.send(set)
      } catch (error) {
        throw error
      }
    })

module.exports = Router
