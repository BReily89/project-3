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
const rommiesRoutines = new Routine({
    bodyPart:'LEG DAY',
    name:'Tree Trunk Legs'
})
const ronniesexerciseLibrary = new Exercises({
    exerciseOne: 'Squat',
    repGoal: 15,
    actualReps: '',
    exerciseTwo: 'Hack-squat',
    repGoal: 8,
    actualReps: '',
    exerciseThree: 'dead-lifts',
    repGoal: 6,
    actualReps: '',
    exercisFour: 'reverse leg curl',
    repGoal: 8,
    actualReps: ''

})
const daruis = new User({
    userName: 'Darius Charles',
    password:'Juice',
    height: '5ft  8in',
    weight: 260,
    personalRecord: '400lbs military press'


}) 


const dariusRoutines = new Routine({
    bodyPart:'Shoulders',
    name:'shoulder shelling'
    
    
})
//Darius Charles
const dariussExerciseLibrary = new Exercises({
    exerciseOne: 'seated dumbell press',
    repGoal: 10,
    actualReps: '',
    exerciseTwo: 'military press',
    repGoal: 8,
    actualReps: '',
    exerciseThree: 'reverse pec-deck',
    repGoal: 6,
    actualReps: '',
    exercisFour: 'shrugs',
    repGoal: 8,
    actualReps: ''
})

User.remove({})
.then(() => jay.save())
.then(() => console.log('start juicin')())
.then(() => mongoose.connection.close())


