require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const {User, Routine, Exercise} = require('./schema')


const jay = new User({
    userName: 'Jay Cutler',
    password:'Roids',
    height: '5ft  10in',
    weight: 290,
    personalRecord: '600lbs bench press'


}) 


const jaysRoutines = new Routine({
    bodyPart:'Back & Biceps',
    name:'Big ole Biceps'
    
    
})
const jaysExerciseLibrary = new Exercises({
    exerciseOne: 'standing barbel curl',
    repGoal: 10,
    actualReps: '',
    exerciseTwo: 'preacher curl',
    repGoal: 8,
    actualReps: '',
    exerciseThree: 'concentration curl',
    repGoal: 6,
    actualReps: '',
    exercisFour: 'reverse curl',
    repGoal: 8,
    actualReps: ''
})
const ronnie = new User({
    userName: 'Ronnie Coleman',
    password:'roid-rage',
    height: '6ft  2in',
    weight: 310,
    personalRecord: '1000lbs squat'
})
const jaysRoutines = new Routine({
    bodyPart:'LEG DAY',
    name:'Tree Trunk Legs'
})
const jaysExerciseLibrary = new Exercises({
    exerciseOne: 'standing barbel curl',
    repGoal: 10,
    actualReps: '',
    exerciseTwo: 'preacher curl',
    repGoal: 8,
    actualReps: '',
    exerciseThree: 'concentration curl',
    repGoal: 6,
    actualReps: '',
    exercisFour: 'reverse curl',
    repGoal: 8,
    actualReps: ''
})

