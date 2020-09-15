import React from "react";
import { FormControl, Input, FormHelperText, Button } from "@material-ui/core";

function DisplayResults(props) {
  if (props.currentStepForm !== 5) {
    return null;
  }
  return (
    <div>
      {props.arrOfTeamsPlayThisRound.length === 0 ? (
        <div>You forgot to enter names</div>
      ) : (
        props.arrOfTeamsPlayThisRound.map((team) => (
          <div>
            {team.map((player) => (
              <h4>{player}</h4>
            ))}
          </div>
        ))
      )}
      {props.arrOfTeamsPlayThisRound.length !== 0 && (
        <h6>
          Players that not play this round:
          {props.playersNotPlayThisRound.map((notPlay) =>
            notPlay.map((name) => <h6>{name}</h6>)
          )}
        </h6>
      )}
    </div>
  );
}

export default DisplayResults;
