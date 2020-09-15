import React from "react";
import "./formSteps.css";
import { FormControl, InputLabel, Input } from "@material-ui/core";

function FormStep2(props) {
  if (props.currentStepForm !== 2) {
    return null;
  }
  return (
    <div className="step-container">
      <h3 className="step-title"> How many teams do you want to generate?</h3>
      <FormControl className="form-control">
        <InputLabel htmlFor="num-of-teams">enter number</InputLabel>
        <Input
          name="numOfTeams"
          id="num-of-teams"
          type="number"
          aria-describedby="my-helper-text"
          onChange={props.onChange}
        />
      </FormControl>
    </div>
  );
}

export default FormStep2;
