import React from "react";
import "./app.css";
import { Dropdown } from "semantic-ui-react";
import Workout from "../Workout/app";
class Checklist extends React.Component {
  state = { selectValue: "Workout A" };

  handleChange = (event) => {
    this.setState({ selectValue: event.target.value });
  };

  render() {
    return (
      <div className="checklist">
        <div
          className="ui three item menu"
          defaultValue={this.state.selectValue}
          onChange={this.handleChange}
        >
          <a className="item active" value="Workout A">
            Workout A
          </a>
          <a className="item" value="Workout B">
            Workout B
          </a>
          <a className="item" value="Workout C">
            Workout C
          </a>
        </div>
        {/* <select
          name="dropdown"
          defaultValue={this.state.selectValue}
          id="dropdown"
          onChange={this.handleChange}
        >
          <option value="Workout A">Workout A</option>
          <option value="Workout B">Workout B</option>
          <option value="Workout C">Workout C</option>
        </select> */}
        <Workout current={this.state.selectValue} />
      </div>
    );
  }
}
export default Checklist;
