const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    
        userName: String,
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
        actualReps: Number,
        exerciseTwo: String,
        repGoal: Number,
        actualReps: Number,
        exerciseThree: String,
        repGoal: Number,
        actualReps: Number,
        exercisFour: String,
        repGoal: Number,
        actualReps: Number

    }

})



module.exports = {
    User, Routine, Exercise
}