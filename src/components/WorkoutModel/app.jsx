import React from "react";
import "./app.css";

function WorkoutModel(props) {
    return (
        <tbody className="workoutTable">
            
            <tr>
                <div class="ui left floated compact segment">
                    <div class="ui fitted checkbox">
                        <input type="checkbox"></input>
                        <label></label>
                    </div>
                </div>
                <td onClick={() => props.changeUrl(props.url, props.name)} className="movement"><span className="movementText">{props.name}</span></td>
                <td className="sets"> <p> <span>Set 1: {props.set1Reps}</span><br></br><span>Set 2: {props.set2Reps}</span><br></br> <span>Set 3: {props.set3Reps}</span> </p> </td>
                <td className="weight"> <p> <span>Set 1: <input type="text" name="weight" onChange={(event) => props.updateWeight(event.target.value, props.workoutType, props.id)} /> </span><br></br><span>Set 2: {props.set2Weight} </span><br></br><span>Set 3: {props.set3Weight}</span> </p>  </td>
            </tr>
        </tbody>
    );
}

export default WorkoutModel;