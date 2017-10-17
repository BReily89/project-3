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
//const ArmBlaster = new Exercise({nameOne:' standing barbell curl' ,repGoal: 10, actualReps: ''})
const armBlaster = new Exercise({
    nameOne: 'standing barbel curl',
    repGoal: 10,
    actualReps: '',
    nameTwo: 'preacher curl',
    repGoal: 8,
    actualReps: '',
    nameThree: 'concentration curl',
    repGoal: 6,
    actualReps: '',
    nameFour: 'reverse curl',
    repGoal: 8,
    actualReps: ''
})
const legDay = new Exercise({
    nameOne: 'Squat',
    repGoal: 15,
    actualReps: '',
    nameTwo: 'Hack-squat',
    repGoal: 8,
    actualReps: '',
    nameThree: 'dead-lifts',
    repGoal: 6,
    actualReps: '',
    nameFour: 'reverse leg curl',
    repGoal: 8,
    actualReps: ''

})
const shoulderShelling = new Exercise({
    nameOne: 'seated dumbell press',
    repGoal: 10,
    actualReps: '',
    nameTwo: 'military press',
    repGoal: 8,
    actualReps: '',
    nameThree: 'reverse pec-deck',
    repGoal: 6,
    actualReps: '',
    nameFour: 'shrugs',
    repGoal: 8,
    actualReps: '',
})
const Routines = new RoutineModel({ name: 'Shoulder Shelling', bodyPart: 'Shoulders' })
const Routines = new RoutineModel({ name: 'Lead Leg Day', bodyPart: 'Legs'})
const Routines = new RoutineModel({ name: 'Arm-Blaster' , bodyPArt:'biceps'})
// const Routine1 = new Routines({
//     bodyPart: 'Biceps',
//     name:'arm blaster'
// })
// const Routine2 = new Routines({
//     bodyPart:'LEG DAY',
//     name:'Tree Trunk Legs'
// })
// const Routine3 = new Routines({
//     bodyPart:'Shoulders',
//     name:'shoulder shelling'

//})

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
}),
Exercise.remove({})
.then(() => armBlaster.save())
.then(() => legDay.save())
.then(() => shoulderShelling.save())
.then(() => mongoose.connection.close())

)
