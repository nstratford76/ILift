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
