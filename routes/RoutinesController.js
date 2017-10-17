const express = require('express')
const router = express.Router({mergeParams: True})
const { User, Routine } = require('../db/schema')

import React, { Component } from 'react';

router.get('/:id', async (req, res) => {
    try {
        const routines = await routines.find({})
        res.json(routines)
    }catch (err) {
        res.send(err)
    }
})

router.post('/', async (req, res) => {
    const newRoutines = new newRoutines()

    const user = await User.findbyId(req.params.userId)

    user.exercises.push(newRoutines)
    const saved = await user.save()
    res.json(saved)
})

router.patch('/:id', async (req, res) => {
    const updateRoutines = req.body.idea
    const user = await User.findbyId(req.params.userId)
    const routines = users.routines.is(req.params.id)
    routines.title = updatedRoutines.title
    routines.name = updatedRoutines.name  
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


export default RoutineController;