import React from "react";
import "./app.css";

function WorkoutModel(props) {
    return (
        <tbody className="workoutTable">
            <tr>
                <td onClick={() => props.changeUrl(props.url)}>{props.name}</td>
                <td> <p> <span>Set 1: {props.set1Reps}</span><br></br><span>Set 2: {props.set2Reps}</span><br></br> <span>Set 3: {props.set3Reps}</span> </p> </td>
                <td> <p> <span>Set 1: <input type="text" /> </span><br></br><span>Set 2: </span><br></br><span>Set 3: </span> </p>  </td>
            </tr>
        </tbody>
    );
}

export default WorkoutModel;