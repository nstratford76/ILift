import React, { Component } from "react";
import "./app.css";
import WorkoutModel from "../WorkoutModel/app";

const workoutA = [
  {
    id: 1,
    name: "Incline Bench",
    set1Reps: "5-6",
    set2Reps: "6-7",
    set3Reps: "7-8",
    url: "https://www.youtube.com/embed/SrqOu55lrYU",
  },
  {
    id: 2,
    name: "SA DB Bench",
    set1Reps: "8-10",
    set2Reps: "10-12",
    set3Reps: "(optional)",
    url: "https://www.youtube.com/embed/td-4lC0tXKA",
  },
  {
    id: 3,
    name: "Incline DB curls",
    set1Reps: "6-8",
    set2Reps: "6-8",
    set3Reps: "6-8",
    url: "https://www.youtube.com/embed/MVSccftvAQw",
  },
  {
    id: 4,
    name: "SA Rope Hammer Curls",
    set1Reps: "8-10",
    set2Reps: "10-12",
    set3Reps: "(optional)",
    url: "https://www.youtube.com/embed/RB7LtfxDB8E",
  },
  {
    id: 5,
    name: "DB Bent Over Flyes",
    set1Reps: "12-15",
    set2Reps: "4-6",
    set3Reps: "4-6",
    url: "https://www.youtube.com/embed/ttvfGg9d76c",
  },
];

const workoutB = [
  { id: 1, name: "Bulgarian Split Squats", set1Reps:"6-8", set2Reps:"6-8", set3Reps:"6-8", url: "https://www.youtube.com/embed/2C-uNgKwPLE" },
  { id: 2, name: "Romanian Deadlifts", set1Reps:"6-8", set2Reps:"6-8", set3Reps:"6-8",url: "https://www.youtube.com/embed/EC-8WL5y3GY" },
  { id: 3, name: "Leg Extensions", set1Reps:"10-12", set2Reps:"10-12", set3Reps:"10-12",url: "https://www.youtube.com/embed/YyvSfVjQeL0" },
  { id: 4, name: "Hanging Weighted Knee Raises", set1Reps:"8-15", set2Reps:"8-15", set3Reps:"8-15",url: "https://www.youtube.com/embed/cAM1Tm9w8F4" }
];

const workoutC = [
  {
    id: 1,
    name: "Standing Barbell Press",
    set1Reps: "6-8",
    set2Reps: "6-8",
    set3Reps: "8-10",
    url: "https://www.youtube.com/embed/2yjwXTZQDDI",
  },
  {
    id: 2,
    name: "Weighted Chin-ups",
    set1Reps: "6",
    set2Reps: "6",
    set3Reps: "(optional)",
    url: "https://www.youtube.com/embed/9aA0-FbxK9E",
  },
  {
    id: 3,
    name: "SA Seated Cable Rows",
    set1Reps: "8-12",
    set2Reps: "8-12",
    set3Reps: "(optional)",
    url: "https://www.youtube.com/embed/CrylzZHfO1c",
  },
  {
    id: 4,
    name: "SA Tricep Rope Push-down",
    set1Reps: "8-10",
    set2Reps: "10-12",
    set3Reps: "10-12",
    url: "https://www.youtube.com/embed/Zl46Cxc4DDs",
  },
  {
    id: 5,
    name: "DB Lateral Raises",
    set1Reps: "12-15",
    set2Reps: "4-6",
    set3Reps: "4-6",
    url: "https://www.youtube.com/embed/3VcKaXpzqRo",
  },
];

class Workout extends React.Component {
  state = { workouts: "", url: "" };

  getWorkout = () => {
    const workout = this.props.current;
    console.log(workout);
    return workout;
  };

  changeVideo = (newUrl) => {
    this.setState({ url: newUrl });
  };

  getWorkoutList = () => {
    let workouts = "";
    switch (this.props.current) {
      case "Workout A":
        workouts = workoutA;
        break;
      case "Workout B":
        workouts = workoutB;
        break;
      case "Workout C":
        workouts = workoutC;
        break;
      default:
        workouts = workoutA;
        break;
    }
    return (
      <div className="main-content">
        <div className="key">
          <h4>Key</h4>
          <p>SA = Single Arm</p>
          <p>DB = Dumbell</p>
          <p>BW = Body Weight</p>

        </div>
        <div>
          <table class="ui celled table">
            <thead>
              <tr>
                <th>Movement</th>
                <th>Sets</th>
                <th>Weight</th>
                <th>Example Video</th>
              </tr>
            </thead>
            {workouts.map(w => <WorkoutModel key={w.id} set1Reps={w.set1Reps} set2Reps={w.set2Reps} set3Reps={w.set3Reps} name={w.name} url={w.url} />)}
          </table>

        </div>
      </div>
    );
  };

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
