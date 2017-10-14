const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    
        userName: String,
        height: String,
        weight: Number,
        personalRecords: String
    })
const routineSchema = mongoose.Schema({
    title: {
        type: String,
    },
})
const exerciseSchema = mongoose.Schema({
    
})



module.exports = {
    User, Exercise
}