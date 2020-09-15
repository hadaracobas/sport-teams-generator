import React from "react";
import "./formSteps.css";
import { Button } from "@material-ui/core";

function DisplayResults(props) {
  if (props.currentStepForm !== 5) {
    return null;
  }
  return (
    <div>
      {props.arrOfTeamsPlayThisRound.length === 0 ? (
        <div>You forgot to enter names</div>
      ) : (
        <div>
          <h2 className="step-title">
            These are the teams. Good luck to you in the game (:{" "}
          </h2>
          <div className="teams-container">
            {props.arrOfTeamsPlayThisRound.map((team, index) => (
              <div className="team-container" key={index}>
                <h5>Team Number {index + 1}</h5>
                {team.map((player) => (
                  <h4>{player} </h4>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
      {props.playersNotPlayThisRound.length !== 0 && (
        <h6 className="playersNotPlay-text">
          Players that not play this round:
          {props.playersNotPlayThisRound.map((notPlay) =>
            notPlay.map((name) => (
              <h6 className="playersNotPlay-text">{name}</h6>
            ))
          )}
        </h6>
      )}
      <Button variant="contained" onClick={props.resetApp}>
        Reset
      </Button>
    </div>
  );
}

export default DisplayResults;
