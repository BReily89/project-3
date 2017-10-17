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
//refactor names to match seeds
const exerciseSchema = mongoose.Schema({
    nameOne: String,
    repGoalOne: Number,
    actualRepsOne: Number,
    nameTwo: String,
    repGoalTwo: Number,
    actualRepsTwo: Number,
    NameThree: String,
    repGoalThree: Number,
    actualRepsThree: Number,
    nameFour: String,


    
    
})
const routinesSchema = mongoose.Schema({
    name: String,
    bodyPart: String,
    exercise: [exerciseSchema]
    
})


const User = mongoose.model('User', userSchema)
const Routines = mongoose.model('Routine', routinesSchema)
const Exercise = mongoose.model('Exercises', exerciseSchema)



module.exports = {
    User, Routines, Exercise
}