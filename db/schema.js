const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: String,
    password: String,
    height: String,
    weight: Number,
    personalRecord: String,
    description: { type: String, default: 'New user' },
    createdAt: { type: Date, default: Date.now }
})
//refactor names to match seeds
const exerciseSchema = mongoose.Schema({
    name: String,
    repGoal: Number,
    actualReps: Number,
})
const routinesSchema = mongoose.Schema({
    name: String,
    bodyPart: String,
    exercises: [exerciseSchema]
    
})


const User = mongoose.model('User', userSchema)
const Routines = mongoose.model('Routine', routinesSchema)
const Exercise = mongoose.model('Exercises', exerciseSchema)



module.exports = {
    User, Routines, Exercise
}