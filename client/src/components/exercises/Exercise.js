import React, { Component } from 'react';

const Exercise = (props) => {
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
  /* change on blur*/  
   <input onBlur={updateRoutines} onChange={handleChange} name="title" value={props.routines} />
    <textarea onBlur={updateRoutines} onChange={handleChange} name="description" value={props.description} />
    <button onClick={deleteRoutine}>Delete Routine</button>
    </div>
    )
}

// class Exercise extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

export default Exercise; 