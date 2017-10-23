import React, { Component } from 'react';

const Exercise = (props) => {
    console.log(props)
        const deleteRoutines = () => {
            props.deleteRoutines(props._id)
        }
        const handleChange = (event) => {
        props.handleChange(event, props._id)
        }
        const updateRoutines = () => {
            props.updateRoutines(props._id)
        }

    return (
        <div>
             {props.exercises.map((exercise) => { 
                return (
                    <div>{exercise.nameOne}</div>
                )
            })}
            {/* change on blur*/}
             <input onBlur={updateRoutines} onChange={handleChange} name="title" value={props.routines} />
    <textarea onBlur={updateRoutines} onChange={handleChange} name="description" value={props.description} />
    <button onClick={deleteRoutines}>Delete Routine</button> 
        </div>
    )
    }



export default Exercise; 