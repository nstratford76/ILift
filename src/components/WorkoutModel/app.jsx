import React from "react";
import "./app.css";

function WorkoutModel(props) {
    return (
        <tbody>
            <tr>
                <td> <input type="checkbox" name = {props.name}/> {props.name} </td>
                <td> <a href={props.url} target = "_blank">Video Link</a></td>
            </tr>
        </tbody>
    );
}

export default WorkoutModel;