const express = require('express')
const router = express.Router({ mergeParams: true })
const { Routines, Exercises } = require('../db/schema')

router.get('/', async (req, res) => {
    try {
        const exercises = await Exercises.findById(request.params.exerciseId)
        res.json(routines.exercises)
    } catch (err) {
        res.send(err)
    }
})
router.post('/', async (req, res) => {
    try {
        const newExercise = new Exercises(req.body.exercises)
        const saved = await newExercise.save()
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})


export default ExerciseController;