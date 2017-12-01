const express = require('express')
const router = express.Router({ mergeParams: true })
const { Routines, Exercise } = require('../db/schema')

router.get('/', async (req, res) => {
    try {
        const routines = await Routines.findById(request.params.id)
        const exercise = routines.exercises
        res.json(exercise)
    } catch (err) {
        res.send(err)
    }
})
router.post('/', async (req, res) => {
    try {
        const newExercise = new Exercise(req.body.exercise)
        const saved = await newExercise.save()
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})


module.exports = router;