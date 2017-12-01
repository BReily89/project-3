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
    exercise: [exerciseSchema]
    
})


const User = mongoose.model('User', userSchema)
const Exercise = mongoose.model('Exercises', exerciseSchema)
const Routines = mongoose.model('Routines', routinesSchema)



module.exports = {
    User, Routines, Exercise
}