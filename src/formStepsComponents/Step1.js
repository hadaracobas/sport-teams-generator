import React from "react";
import "./formSteps.css";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";

function FormStep1(props) {
  if (props.currentStepForm !== 1) {
    return null;
  }
  return (
    <div className="step-container">
      <h3 className="step-title"> How many players in total participate?</h3>
      <FormControl className="form-control">
        <InputLabel htmlFor="total-num-of-players">enter number</InputLabel>
        <Input
          onChange={props.onChange}
          name="totalNumOfPlayers"
          id="total-num-of-players"
          aria-describedby="my-helper-text"
          type="number"
        />
      </FormControl>
    </div>
  );
}

export default FormStep1;
