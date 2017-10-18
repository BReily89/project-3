const express = require('express')

const router = express.Router()
const { User } = require('../db/schema')

router.get('/', async (req, res) => {
    try {
        const users = await User.find({})
        res.json(users)
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

router.patch('/:id', async (req, res) => {
    try {
        const updatedUser = req.body.user
        const user = await User.findById(req.params.iid)
        console.log(user)
        user.personalRecord = updatedUser.personalRecord
        const saved = await user.save()
        res.json(saved)
    } catch (error) {
        console.log(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const users = await User.findById(req.params.id)
        res.json(users)
    } catch (err) {
        res.send(err)
    }
})
router.delete('/:id', async (req, res) => {
    try {
        console.log('delete')
        const user = await User.findByIdAndRemove(req.params.id)
        res.json(user)
    } catch (error) {
        console.log(error)
    }
})
module.exports = router