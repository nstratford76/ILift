import React from "react";
import "./app.css";

function WorkoutModel(props) {
    return (
        <tbody>
            <tr>
                <td>{props.name}</td>
                <td> <ul> <li>Set 1: {props.set1Reps}</li> <li>Set 2: {props.set2Reps}</li> <li>Set 3: {props.set3Reps}</li> </ul> </td>
                <td> <ul> <li>Set 1: <input type="text" /> </li> <li>Set 2: </li> <li>Set 3: </li> </ul>  </td>
                <td> <iframe src={props.url}>Video Link</iframe></td>
            </tr>
        </tbody>
    );
}

export default WorkoutModel;