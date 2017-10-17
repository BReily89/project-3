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
    repGoalOne: 10,
    actualRepsOne: '',
    nameTwo: 'preacher curl',
    repGoalTwo: 8,
    actualRepsTwo: '',
    nameThree: 'concentration curl',
    repGoalThree: 6,
    actualRepsThree: '',
    nameFour: 'reverse curl',
    repGoalFour: 8,
    actualRepsFour: ''
})
const legDay = new Exercise({
    nameOne: 'Squat',
    repGoalOne: 15,
    actualRepsOne: '',
    nameTwo: 'Hack-squat',
    repGoalTwo: 8,
    actualRepsTwo: '',
    nameThree: 'dead-lifts',
    repGoalThree: 6,
    actualRepsThree: '',
    nameFour: 'reverse leg curl',
    repGoalFour: 8,
    actualRepsFour: ''

})
const shoulderShelling = new Exercise({
    nameOne: 'seated dumbell press',
    repGoalOne: 10,
    actualRepsOne: '',
    nameTwo: 'military press',
    repGoalTwo: 8,
    actualRepsTwo: '',
    nameThree: 'reverse pec-deck',
    repGoalThree: 6,
    actualRepsThree: '',
    nameFour: 'shrugs',
    repGoalFour: 8,
    actualRepsFour: '',
})
const Routine1 = new Routines({ 
    name: 'Shoulder Shelling', 
    bodyPart: 'Shoulders', 
    exercise: [armBlaster, legDay, shoulderShelling]
 })
const Routine2 = new Routines({ name: 'Lead Leg Day', bodyPart: 'Legs'})
const Routine3 = new Routines({ name: 'Arm-Blaster' , bodyPArt:'biceps'})
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
// Exercise.remove({})
// .then(() => armBlaster.save())
// .then(() => legDay.save())
// .then(() => shoulderShelling.save())
// .then(() => mongoose.connection.close())

// )
)