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
        <table className="ui celled table myStyle">
          <thead>
            <tr>
              <th>{this.getWorkout()}</th>
              <th>Reps</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Name">
                <input type="checkbox" value="Benchpress" />
                BenchPress
              </td>
              <td data-label="Reps">
                <input type="text" defaultValue="30" />
              </td>
              <td data-label="Weight"><input type="text" defaultValue="100" /></td>
            </tr>
            <tr>
              <td data-label="Name">
                <input type="checkbox" value="Benchpress" />
                BenchPress
              </td>
              <td data-label="Reps">
                <input type="text" defaultValue="30" />
              </td>
              <td data-label="Weight"><input type="text" defaultValue="100" /></td>
            </tr>
            <tr>
              <td data-label="Name">
                <input type="checkbox" value="Benchpress" />
                BenchPress
              </td>
              <td data-label="Reps">
                <input type="text" defaultValue="30" />
              </td>
              <td data-label="Weight"><input type="text" defaultValue="100" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Workout;
