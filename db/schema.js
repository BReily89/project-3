const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    title: {
        userName: String,
        password: String,
        height: String,
        weight: Number,
        personalRecords: String
    },
    description: {type: String, default: 'New user'},
    createdAt: {type: Date, default: Date.now}
})
const routineSchema = mongoose.Schema({
    title: {
        bodyPart: String,
        name: String,

    },
})

const exerciseSchema = mongoose.Schema({
    title: {
        exerciseOne: String,
        repGoal: Number,
        actualReps: '',
        exerciseTwo: String,
        repGoal: Number,
        actualReps: '',
        exerciseThree: String,
        repGoal: Number,
        actualReps: '',
        exercisFour: String,
        repGoal: Number,
        actualReps: ''

    }

})
const User = mongoose.model('User', userSchema)
const Routine = mongoose.model('Routine', routineSchema)
const Exercise = mongoose.model('Exercises', exerciseSchema)



module.exports = {
    User, Routine, Exercise
}