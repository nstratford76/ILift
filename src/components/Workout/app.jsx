import React, { Component } from "react";
import "./app.css";
import WorkoutModel from "../WorkoutModel/app";


const workoutA = [
  { id: 1, name: "Incline Bench", url: "https://www.youtube.com/embed/SrqOu55lrYU" },
  { id: 2, name: "SA DB Bench", url: "https://www.youtube.com/embed/td-4lC0tXKA" },
  { id: 3, name: "Incline DB curls", url: "https://www.youtube.com/embed/MVSccftvAQw" },
  { id: 4, name: "SA Rope Hammer Curls", url: "https://www.youtube.com/embed/RB7LtfxDB8E" },
  { id: 5, name: "DB Bent Over Flyes", url: "https://www.youtube.com/embed/ttvfGg9d76c" }
];

const workoutB = [
  { id: 1, name: "Bulgarian Split Squats (per leg)", url: "https://www.youtube.com/watch?v=EC-8WL5y3GY" },
  { id: 2, name: "Romanian Deadlifts", url: "https://www.youtube.com/embed/EC-8WL5y3GY" },
  { id: 3, name: "Leg Extensions", url: "https://www.youtube.com/embed/YyvSfVjQeL0" },
  { id: 4, name: "Hanging Weighted Knee Raises", url: "https://www.youtube.com/embed/cAM1Tm9w8F4" }
];

const workoutC = [
  { id: 1, name: "Standing Barbell Press", url: "https://www.youtube.com/embed/2yjwXTZQDDI" },
  { id: 2, name: "Weighted Chin-ups", url: "https://www.youtube.com/embed/9aA0-FbxK9E" },
  { id: 3, name: "SA Seated Cable Rows", url: "https://www.youtube.com/embed/CrylzZHfO1c" },
  { id: 4, name: "SA Tricep Rope Push-down", url: "https://www.youtube.com/embed/Zl46Cxc4DDs" },
  { id: 5, name: "DB Lateral Raises", url: "https://www.youtube.com/embed/3VcKaXpzqRo" }
];

class Workout extends React.Component {


  state = {};

  getWorkout = () => {
    const workout = this.props.current;
    console.log(workout);
    return workout;
  };

  getWorkoutList = () => {
    let workouts = "";
    switch (this.props.current) {
      case "Workout A": workouts = workoutA;
        break;
      case "Workout B": workouts = workoutB;
        break;
      case "Workout C": workouts = workoutC;
        break;
      default: workouts = workoutA;
        break;
    }
    return (
      <div>
        <table class="ui celled table">
          <thead>
            <tr>
              <th>Workout</th>
              <th>Video Link</th>
            </tr>
          </thead>
          {workouts.map(w => <WorkoutModel key={w.id} name={w.name} url={w.url} />)}
        </table>

      </div>
    );
  }

  render() {
    return (
      <div>{this.getWorkoutList()}</div>

      //   <div className="workout">
      //     <table class="ui celled table">
      //       <thead>
      //         <tr>
      //           <th>{this.getWorkout()}</th>
      //           <th>Age</th>
      //           <th>Job</th>
      //         </tr>
      //       </thead>
      //       <tbody>
      //         <tr>
      //           <td data-label="Name">James</td>
      //           <td data-label="Age">24</td>
      //           <td data-label="Job">Engineer</td>
      //         </tr>
      //         <tr>
      //           <td data-label="Name">Jill</td>
      //           <td data-label="Age">26</td>
      //           <td data-label="Job">Engineer</td>
      //         </tr>
      //         <tr>
      //           <td data-label="Name">Elyse</td>
      //           <td data-label="Age">24</td>
      //           <td data-label="Job">Designer</td>
      //         </tr>
      //       </tbody>
      //     </table>
      //   </div>
    );
  }
}
export default Workout;
