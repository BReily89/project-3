const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: String,
    password: String,
    height: String,
    weight: Number,
    personalRecords: String,
    description: { type: String, default: 'New user' },
    createdAt: { type: Date, default: Date.now }
})
const exerciseSchema = mongoose.Schema({
    name: String,
    reps: Number,
    actualReps: Number
})
const ExerciseLibrary1 = new ExerciseModel({name: 'b', reps: 10, actualReps:8})
const ExerciseLibrary2 = new ExerciseModel({name : 'c', reps: 12, actualReps: 8})
const ExerciseLibrary3 = new ExerciseModel({name: 'd', reps: 15, actualReps: 4})
const routineSchema = mongoose.Schema({
    bodyPart: String,
    name: String,
    exercises: [exerciseSchema]
})


const User = mongoose.model('User', userSchema)
const Routine = mongoose.model('Routine', routineSchema)
const Exercise = mongoose.model('Exercises', exerciseSchema)



module.exports = {
    User, Routine, Exercise
}