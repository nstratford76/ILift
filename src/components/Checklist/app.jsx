import React from "react";
import "./app.css";
import { Menu } from 'semantic-ui-react'
import Workout from "../Workout/app";
class Checklist extends React.Component {
  state = {activeItem: 'Workout A'};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
    const { activeItem } = this.state
    return (
      <div className="checklist">
      <Menu widths = {3}>
        <Menu.Item
          name='Workout A'
          active={activeItem === 'Workout A'}
          onClick={this.handleItemClick}
        >
          Workout A
        </Menu.Item>
        <Menu.Item
          name='Workout B'
          active={activeItem === 'Workout B'}
          onClick={this.handleItemClick}
        >
          Workout B
        </Menu.Item>

        <Menu.Item
          name='Workout C'
          active={activeItem === 'Workout C'}
          onClick={this.handleItemClick}
        >
          Workout C
        </Menu.Item>
      </Menu>
      <Workout current = {activeItem}/>
      </div>
      
    );
  }
}
export default Checklist;
