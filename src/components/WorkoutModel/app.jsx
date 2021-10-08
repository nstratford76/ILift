import React from "react";
import "./app.css";

function WorkoutModel(props) {
 return (
 <div className="workout">
     <table class="ui celled table">
     <thead>
         <tr>
         <th>Workout</th>
         <th>Video Link</th>
         </tr>
     </thead>
     <tbody>
        <tr>
            <td>{props.name}</td>
            <td>{props.url}</td>
        </tr>
        </tbody>
        </table>
 </div>
 );
}

export default WorkoutModel;