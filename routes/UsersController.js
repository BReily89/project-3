const router = express.Router()
const express = require('express')
consr { User } = require('../db/schema')

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
}
})