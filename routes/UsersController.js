const express = require('express')

const router = express.Router()
const { User } = require('../db/schema')

router.get('/', async (req, res) => {
    try {
        const users = await User.find({})
        res.json(users)
    }catch (err) {
        res.send(err)
    }
})
router.get('/:id', async (req, res) => {
    try {
        const users = await User.findById(req.params.id)
        res.json(user)
    } catch (err) {
        res.send(err)
    }
})
router.post('/', async (req, res) => {
    try {
        const NewUser = new User(req.body.user)
        const saved = await NewUser.save()
        res.json(saved)
     } catch (err) {
         res.send(err)
     }
    
})
module.exports = router