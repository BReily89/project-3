require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const {User, Routines, Exercise} = require('./schema')


const jay = new User({
    userName: 'Jay Cutler',
    password:'Roids',
    height: '5ft  10in',
    weight: 290,
    personalRecord: '600lbs bench press'


}) 
const ronnie = new User({
    userName: 'Ronnie Coleman',
    password:'roid-rage',
    height: '6ft  2in',
    weight: 310,
    personalRecord: '1000lbs squat'
})
const darius = new User({
    userName: 'Darius Charles',
    password:'Juice',
    height: '5ft  8in',
    weight: 260,
    personalRecord: '400lbs military press'
}) 
const standingBarbelCurl = new Exercise({
    name:'standing barbel curl',
    repGoal:12,
    actualReps:0
})
const preacherCurl =  new Exercise({
    name:'preacher curl',
    repGoal: 12,
    actualReps:0
})
const concentrationCurls =  new Exercise({
    name:'concentration curls',
    repGoal: 8,
    actualReps:0
})
const reverseCurl =  new Exercise({
    name:'reverse curl',
    repGoal: 10,
    actualReps:0
})
const ArmBlaster = new Routines({
    name: 'Arm Blaster', 
    bodyPart: 'biceps', 
    exercises: [standingBarbelCurl, preacherCurl, concentrationCurls, reverseCurl]
})

const squats = new Exercise({
    name: 'squats',
    repGoal: 10,
    actualReps:0
})
const hackSquat = new Exercise({
    name:'hack squat',
    repGoal: 12,
    actualReps:0
})
const deadLifts = new Exercise({
    name: 'dead lifts',
    repGoal: 12,
    actualReps:0
})
const reverseLegCurl = new Exercise({
    name: ' Reverse Leg Curl',
    repGoal: 15,
    actualReps: 0
})
const legDay = new Routines({
    name: 'Lead Leg Day',
    bodyPart: 'Legs',
    exercises: [ squats, hackSquat, deadLifts, reverseLegCurl]
    
})
const seatedDumbellPress = new Exercise({
    name: 'seated dumbell press',
    repGoal: 10,
    actualReps: 0
})

const seatedMilitaryPress = new Exercise({
    name: 'seated military press',
    repGoal: 8,
    actualReps: 0
})

const reversePecDeck = new Exercise({
    name: 'reverse pec deck',
    repGoal: 12,
    actualReps: 0
})

const shrugs = new Exercise({
    name: 'shrugs',
    repGoal: 10,
    actualReps: 0
})

const shoulderShelling = new Routines({
    name: 'Shoulder Shelling', 
    bodyPart: 'Shoulders', 
    exercises: [seatedDumbellPress, seatedMilitaryPress, reversePecDeck, shrugs]
})

User.remove({})
.then(() => jay.save())
.then(() => ronnie.save())
.then(() => darius.save())
.then(() => console.log('start juicin'))
.catch((error) => {console.log(error)})

Routines.remove({})
.then(() => ArmBlaster.save())
.then(() => legDay.save())
.then(() => shoulderShelling.save())
.then(() => console.log('synthol'))
.catch((err) => {
    console.log(err)
})
.then(() => {mongoose.connection.close()})