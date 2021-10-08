import React from "react";
import "./app.css";

function WorkoutModel(props) {
    return (
        <tbody>
            <tr>
                <td>{props.name}</td>
                <td> <iframe src={props.url}>Video Link</iframe></td>
            </tr>
        </tbody>
    );
}

export default WorkoutModel;