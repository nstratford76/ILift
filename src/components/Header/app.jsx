import React from "react"
import './app.css';
class Header extends React.Component {
    state = {currentDate: Date}

    // https://www.itsolutionstuff.com/post/how-to-get-current-date-and-time-in-reactexample.html 
    constructor() {
        super();
        var today = new Date(),
        date = (today.getMonth() + 1) + ' • ' + today.getDate() + ' • ' + today.getFullYear();
       
        this.state = {
          currentDate: date
        }
      }

    render() {
        return (
            <div className="header">
                <h1>cardinal</h1>
                <p> {this.state.currentDate} </p>
            </div>
        )
    }
}
export default Header