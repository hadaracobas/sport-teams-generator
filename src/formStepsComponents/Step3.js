import React from "react";
import "./formSteps.css";
import { FormControl, InputLabel, Input } from "@material-ui/core";

function FormStep3(props) {
  if (props.currentStepForm !== 3) {
    return null;
  }
  return (
    <div className="step-container">
      <h3 className="step-title"> Number of Players each team?</h3>
      <FormControl className="form-control">
        <InputLabel htmlFor="num-of-players-each-team">enter number</InputLabel>
        <Input
          name="numOfPlayersEachTeam"
          id="num-of-players-each-team"
          type="number"
          aria-describedby="my-helper-text"
          onChange={props.onChange}
        />
      </FormControl>
    </div>
  );
}

export default FormStep3;
