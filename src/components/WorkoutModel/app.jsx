import React from "react";
import "./app.css";

function WorkoutModel(props) {
    return (
        <tbody>
            <tr>
                <td>{props.name}</td>
                <td> Set 1: <input type="text" /> Set 2: <input type="text" /> Set 3: <input type="text" /> </td>
                <td> Set 1: <input type="text" /> Set 2: <input type="text" /> Set 3: <input type="text" /> </td>
                <td> <iframe src={props.url}>Video Link</iframe></td>
            </tr>
        </tbody>
    );
}

export default WorkoutModel;