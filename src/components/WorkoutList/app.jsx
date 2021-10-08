import React from "react";

// import the Contact component
import Workout from "../Workout/app";


function WorkoutList(props) {
  return (
    <div>
      {props.workouts.map(w => <Workout key={w.id} name={w.name} />)}
     </div> 
  ); 
} 

export default WorkoutList;