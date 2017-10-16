const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    
        userName: String,
        password: String,
        height: String,
        weight: Number,
        personalRecords: String
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



module.exports = {
    User, Routine, Exercise
}