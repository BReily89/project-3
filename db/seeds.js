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
const exerciseLibrary1 = new Exercise({
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
const exerciseLibrary2 = new Exercise({
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
const exerciseLibrary3 = new Exercise({
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
    actualReps: '',
})

const Routine1 = new Routines({
    bodyPart: 'Biceps',
    name:'arm blaster'
})
const Routine2 = new Routines({
    bodyPart:'LEG DAY',
    name:'Tree Trunk Legs'
})
const Routine3 = new Routines({
    bodyPart:'Shoulders',
    name:'shoulder shelling'

})

User.remove({})
.then(() => jay.save())
.then(() => ronnie.save())
.then(() => darius.save())
.then(() => console.log('start juicin')
// .catch((err) => {
//     console.log(err)
// }),
,
Routines.remove({})
.then(() => Routine1.save())
.then(() => Routine2.save())
.then(() => Routine3.save())
.then(() =>console.log('synthol'))
.catch((err) => {
    console.log(err)
})
.then(() => mongoose.connection.close())

)
