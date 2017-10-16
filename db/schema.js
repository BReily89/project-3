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
    actualReps: Number,

    
    
})
const routinesSchema = mongoose.Schema({
    bodyPart: String,
    name: String,
    
    exercise: [exerciseSchema]
    
})


const User = mongoose.model('User', userSchema)
const Routines = mongoose.model('Routine', routinesSchema)
const Exercise = mongoose.model('Exercises', exerciseSchema)



module.exports = {
    User, Routines, Exercise
}