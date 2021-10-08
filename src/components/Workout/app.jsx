import React, { Component } from "react";
import "./app.css";

const workoutA = [
    { id: 1, name: "Incline Bench [https://www.youtube.com/watch?v=SrqOu55lrYU&t=19s]" },
    { id: 2, name: "SA DB Bench [https://www.youtube.com/watch?v=td-4lC0tXKA]" },
    { id: 3, name: "Incline DB curls [https://www.youtube.com/watch?v=MVSccftvAQw]" },
    { id: 4, name: "SA Rope Hammer Curls [https://www.youtube.com/watch?v=RB7LtfxDB8E]" },
    { id: 5, name: "DB Bent Over Flyes [https://www.youtube.com/watch?v=ttvfGg9d76c]" }
  ];
  
  const workoutB = [
    { id: 1, name: "Bulgarian Split Squats (per leg) [https://www.youtube.com/watch?v=EC-8WL5y3GY]" },
    { id: 2, name: "Romanian Deadlifts [https://www.youtube.com/watch?v=JCXUYuzwNrM]" },
    { id: 3, name: "Leg Extensions [https://www.youtube.com/watch?v=YyvSfVjQeL0]" },
    { id: 4, name: "Hanging Weighted Knee Raises [https://www.youtube.com/watch?v=cAM1Tm9w8F4]" }
  ];
  
  const workoutC = [
    { id: 1, name: "Standing Barbell Press [https://www.youtube.com/watch?v=2yjwXTZQDDI]" },
    { id: 2, name: "Weighted Chin-ups [https://www.youtube.com/watch?v=9aA0-FbxK9E]" },
    { id: 3, name: "SA Seated Cable Rows [https://www.youtube.com/watch?v=CrylzZHfO1c]" },
    { id: 4, name: "SA Tricep Rope Push-down [https://www.youtube.com/watch?v=Zl46Cxc4DDs]" },
    { id: 5, name: "DB Lateral Raises [https://www.youtube.com/watch?v=3VcKaXpzqRo]" }
  ];

function Workout(props) {
 return (
 <div className="workout">
  <span>{props.name}</span>
 </div>
 );
}

export default Workout;
=======
import React from "react";
import "./app.css";

class Workout extends React.Component {
  state = {};

  getWorkout = () => {
    const workout = this.props.current;
    console.log(workout);
    return workout;
  };

  render() {
    return (
      <div className="workout">
        <table class="ui celled table">
          <thead>
            <tr>
              <th>{this.getWorkout()}</th>
              <th>Age</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Name">James</td>
              <td data-label="Age">24</td>
              <td data-label="Job">Engineer</td>
            </tr>
            <tr>
              <td data-label="Name">Jill</td>
              <td data-label="Age">26</td>
              <td data-label="Job">Engineer</td>
            </tr>
            <tr>
              <td data-label="Name">Elyse</td>
              <td data-label="Age">24</td>
              <td data-label="Job">Designer</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Workout;
>>>>>>> 6de0f5621bf33584426510cade9ffe8f315663a0
