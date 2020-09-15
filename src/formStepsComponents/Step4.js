import React from "react";
import "./formSteps.css";
import { FormControl, Input, Button } from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";

function FormStep4(props) {
  if (props.currentStepForm !== 4) {
    return null;
  } else if (
    props.totalPlayers < props.sumMultPlayersEachTeamAndTeams ||
    props.totalPlayers == 0
  ) {
    return (
      <div className="step-container">
        <WarningIcon />
        <h3 className="step-title error-title">
          We are sorry, you did not enter a correct{" "}
          <b>total number of players</b>.
        </h3>
        <h5 className="error-subtitle">
          Either you did not enter a number at all, or there are not enough
          players to create the number of teams you want. Click the button reser
          to reset the app, or prev to return one step back.
        </h5>
        <Button variant="contained" onClick={props.resetApp}>
          Reset
        </Button>
      </div>
    );
  }
  return (
    <div className="step-container">
      <h3 className="step-title">Names of players</h3>
      <FormControl className="form-control">
        {[...Array(props.totalNumOfPlayers)].map((player, index) => (
          <Input
            key={index}
            name="arrOfPlayersNames"
            placeholder={`enter player name ${index + 1}`}
            aria-describedby="my-helper-text"
            onChange={(e) => {
              props.onChange(index, e.target.value);
            }}
          />
        ))}
        <div className="spacer"></div>
        <Button variant="contained" color="secondary" onClick={props.onClick}>
          Generate Teams
        </Button>
      </FormControl>
    </div>
  );
}

export default FormStep4;
