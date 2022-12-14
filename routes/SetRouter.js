const Router = require('express').Router()
const controller = require('../controllers/SetController')
const { Set, Flashcard, User } = require('../models')


Router.post('/create', async (req, res) => {
    console.log(req.body)
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

Router.put('/:setId', async (req, res) => {
    try {
        
        let update = await Set.update(
          { ...req.body },
          { where: { id: req.params.setId }, returning: true }
        )
        res.send(update)
      } catch (error) {
        throw error
      }
    }
)
Router.get('/', async (req, res) => {
        try {
          let sets = await Set.findAll();
          res.send(sets);
        } catch (error) {
          throw error;
        }
      });

  Router.get('/details', async (req, res) => {
   
      try {
        let flashcards = await Flashcard.findAll({});
        res.send(flashcards);
      } catch (error) {
        throw error;
      }})
    
  
      Router.delete('/delete/:setId', async(req, res) => {
        try {
          let setId = await Set.findOne({where: {id:req.params.setId}})
          // {parseInt(req.params.set.id)}
          if (setId) {
            await setId.destroy()
            return res.send({ message: `Deleted set with an id of ${setId}`})
          }
          // await Set.destroy({
          //   where: { id: setId }
          // })
          // res.send({ message: `Deleted set with an id of ${setId}` })
        } catch (error) {
          throw error
        }
      })
module.exports = Router
