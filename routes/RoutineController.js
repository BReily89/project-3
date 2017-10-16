const express = require('express')
const router = express.Router({merParams: True})
const { User, Routine } = require('../db/schema')

//import React, { Component } from 'react';

router.post('/', async (req, res) => {
    const newRoutine = new newRoutine()

    const user = await User.findbyId(req.params.userId)

    user.ideas.push(newRoutine)
    const saved = await user.save()
    res.json(saved)
})

router.patch('/:id', async (req, res) => {
    const updaterRoutine = req.body.idea
    const user = await User.findbyId(req.params.userId)
    const routine = users.routines.is(req.params.id)
    routine.title = updatedRoutine.title
    routine.name = updatedRoutine.name  
    const save = await user.save()
    res.json(saved) 
})
//DELETE 
router.delete('id/:' , async (req, res) => {
    const user = await User.findbyId(req.params.userId)
    user.routines.id(req.params.id).remove()
    const saved = await user.save()
    res.json(saved)
})

class RoutineController extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default RoutineController;