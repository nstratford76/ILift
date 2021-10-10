import React, { Component } from "react";
import "./app.css";
import WorkoutModel from "../WorkoutModel/app";

let workoutA = [
  {
    workoutType: "A",
    id: 1,
    name: "Incline Bench",
    set1Reps: "5-6",
    set2Reps: "6-7",
    set3Reps: "7-8",
    url: "https://www.youtube.com/embed/SrqOu55lrYU",
    weight: 0,
    set2Weight: 0.9,
    set3Weight: 0.9 * 0.9,
  },
  {
    workoutType: "A",
    id: 2,
    name: "SA DB Bench",
    set1Reps: "8-10",
    set2Reps: "10-12",
    set3Reps: "(optional)",
    url: "https://www.youtube.com/embed/td-4lC0tXKA",
    weight: 0,
    set2Weight: 0.9,
    set3Weight: 0.9 * 0.9,
  },
  {
    workoutType: "A",
    id: 3,
    name: "Incline DB curls",
    set1Reps: "6-8",
    set2Reps: "6-8",
    set3Reps: "6-8",
    url: "https://www.youtube.com/embed/MVSccftvAQw",
    weight: 0,
    set2Weight: 0.9,
    set3Weight: 0.9 * 0.9,
  },
  {
    workoutType: "A",
    id: 4,
    name: "SA Rope Hammer Curls",
    set1Reps: "8-10",
    set2Reps: "10-12",
    set3Reps: "(optional)",
    url: "https://www.youtube.com/embed/RB7LtfxDB8E",
    weight: 0,
    set2Weight: 0.9,
    set3Weight: 0.9 * 0.9,
  },
  {
    workoutType: "A",
    id: 5,
    name: "DB Bent Over Flyes",
    set1Reps: "12-15",
    set2Reps: "4-6",
    set3Reps: "4-6",
    url: "https://www.youtube.com/embed/ttvfGg9d76c",
    weight: 0,
    set2Weight: 0.9,
    set3Weight: 0.9 * 0.9,
  },
];

let workoutB = [
  {
    workoutType: "B",
    id: 1,
    name: "Bulgarian Split Squats",
    set1Reps: "6-8",
    set2Reps: "6-8",
    set3Reps: "6-8",
    url: "https://www.youtube.com/embed/2C-uNgKwPLE",
    weight: 0,
    set2Weight: 0.8,
    set3Weight: 0.8 * 0.8,
  },
  {
    workoutType: "B",
    id: 2,
    name: "Romanian Deadlifts",
    set1Reps: "6-8",
    set2Reps: "6-8",
    set3Reps: "6-8",
    url: "https://www.youtube.com/embed/EC-8WL5y3GY",
    weight: 0,
    set2Weight: 0.9,
    set3Weight: 0.9 * 0.9,
  },
  {
    workoutType: "B",
    id: 3,
    name: "Leg Extensions",
    set1Reps: "10-12",
    set2Reps: "10-12",
    set3Reps: "10-12",
    url: "https://www.youtube.com/embed/YyvSfVjQeL0",
    weight: 0,
    set2Weight: 0.9,
    set3Weight: 0.9 * 0.9,
  },
  {
    workoutType: "B",
    id: 4,
    name: "Hanging Weighted Knee Raises",
    set1Reps: "8-15",
    set2Reps: "8-15",
    set3Reps: "8-15",
    url: "https://www.youtube.com/embed/cAM1Tm9w8F4",
    weight: 0,
    set2Weight: 0.9,
    set3Weight: 0.9 * 0.9,
  },
];

let workoutC = [
  {
    workoutType: "C",
    id: 1,
    name: "Standing Barbell Press",
    set1Reps: "6-8",
    set2Reps: "6-8",
    set3Reps: "8-10",
    url: "https://www.youtube.com/embed/2yjwXTZQDDI",
    weight: 0,
    set2Weight: 0.9,
    set3Weight: 0.9 * 0.9,
  },
  {
    workoutType: "C",
    id: 2,
    name: "Weighted Chin-ups",
    set1Reps: "6",
    set2Reps: "6",
    set3Reps: "(optional)",
    url: "https://www.youtube.com/embed/9aA0-FbxK9E",
    weight: 0,
    set2Weight: 0.8,
    set3Weight: 0.8 * 0.8,
  },
  {
    workoutType: "C",
    id: 3,
    name: "SA Seated Cable Rows",
    set1Reps: "8-12",
    set2Reps: "8-12",
    set3Reps: "(optional)",
    url: "https://www.youtube.com/embed/CrylzZHfO1c",
    weight: 0,
    set2Weight: 0.9,
    set3Weight: 0.9 * 0.9,
  },
  {
    workoutType: "C",
    id: 4,
    name: "SA Tricep Rope Push-down",
    set1Reps: "8-10",
    set2Reps: "10-12",
    set3Reps: "10-12",
    url: "https://www.youtube.com/embed/Zl46Cxc4DDs",
    weight: 0,
    set2Weight: 0.9,
    set3Weight: 0.9 * 0.9,
  },
  {
    workoutType: "C",
    id: 5,
    name: "DB Lateral Raises",
    set1Reps: "12-15",
    set2Reps: "4-6",
    set3Reps: "4-6",
    url: "https://www.youtube.com/embed/3VcKaXpzqRo",
    weight: 0,
    set2Weight: 0.9,
    set3Weight: 0.9 * 0.9,
  },
];

class Workout extends React.Component {
  state = { name: "", url: "", weight: "" };

  getWorkout = () => {
    const workout = this.props.current;
    console.log(workout);
    return workout;
  };

  changeVideo = (newUrl, newName) => {
    this.setState({ name: newName, url: newUrl });
  };

  updateWeight = (newWeight, workoutType, id) => {
    this.setState({ weight: newWeight });
    
    switch(workoutType){
      case "A": workoutA[id - 1].weight = newWeight;
        break;
      case "B": workoutB[id - 1].weight = newWeight;
        break;
      case "C": workoutC[id - 1].weight = newWeight;
        break;
    }
  }

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
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Completed</th>
              <th>Movement</th>
              <th>Sets</th>
              <th>Weight</th>
            </tr>
          </thead>
          {workouts.map((w) => (
            <WorkoutModel
              key={w.id}
              changeUrl={this.changeVideo}
              set1Reps={w.set1Reps}
              set2Reps={w.set2Reps}
              set3Reps={w.set3Reps}
              name={w.name}
              url={w.url}
            />
          ))}
        </table>
        {this.state.url && (
          <div className="video">
            <h1>{this.state.name}</h1>
            <iframe
              width="560"
              height="315"
              src={this.state.url}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        )}
        <div className="key">
          <h4>Key</h4>
          <p>SA = Single Arm</p>
          <p>DB = Dumbell</p>
          <p>BW = Body Weight</p>
        </div>
        <div>
          <table className="ui celled table">
            <thead>
              <tr>
                <th>Completed</th>
                <th>Movement</th>
                <th>Sets</th>
                <th>Weight</th>
              </tr>
            </thead>
            {workouts.map((w) => (
              <WorkoutModel
                key={w.id}
                id={w.id}
                workoutType={w.workoutType}
                changeUrl={this.changeVideo}
                set1Reps={w.set1Reps}
                set2Reps={w.set2Reps}
                set3Reps={w.set3Reps}
                set2Weight={Math.round(Math.round(parseFloat(w.set2Weight * w.weight))/5) * 5}
                set3Weight={Math.round(Math.round(parseFloat(w.set3Weight * w.weight))/5) * 5}
                updateWeight={this.updateWeight}
                name={w.name}
                weight={w.weight}
                url={w.url}
              />
            ))}
          </table>
          {this.state.url && (<iframe
            width="560"
            height="315"
            src={this.state.url}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>)}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>{this.getWorkoutList()}</div>
    );
  }
}
export default Workout;
