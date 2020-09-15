import React, { useState } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import FormStep1 from "./formStepsComponents/Step1";
import FormStep2 from "./formStepsComponents/Step2";
import FormStep3 from "./formStepsComponents/Step3";
import FormStep4 from "./formStepsComponents/Step4";
import DisplayResults from "./formStepsComponents/DisplayResults";
import { shuffleArray, chunk, sliceArrFunc } from "./util";
import SportsBasketballRoundedIcon from "@material-ui/icons/SportsBasketballRounded";

function App() {
  const [currentFormStep, setCurrentFormStep] = useState(1); // current step form
  const [formInfo, setFormInfo] = useState({
    totalNumOfPlayers: 0,
    numOfTeams: 0,
    numOfPlayersEachTeam: 0,
    arrOfPlayersNames: [],
  });
  const [teamsPlayThisRound, setTeamsPlayThisRound] = useState([]);
  const [PlayersNotPlayThisRound, setPlayersNotPlayThisRound] = useState([]);

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const classes = useStyles();

  const nextButton = () => {
    let currentStep = currentFormStep;
    if (currentStep < 4) {
      return (
        <Button onClick={_next} variant="contained">
          Next
        </Button>
      );
    } else {
      return null;
    }
  };

  const prevButton = () => {
    let currentStep = currentFormStep;
    if (currentStep > 1) {
      return (
        <Button onClick={_prev} variant="contained">
          Prev
        </Button>
      );
    } else {
      return null;
    }
  };

  const _next = () => {
    let currentStep = currentFormStep;
    currentStep = currentStep >= 5 ? 5 : currentStep + 1;
    setCurrentFormStep(currentStep);
  };

  const _prev = () => {
    let currentStep = currentFormStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    setCurrentFormStep(currentStep);
  };

  const handleChangeNamesOfPlayers = (index, newValue) => {
    // copy array
    const updatedArray = [...formInfo.arrOfPlayersNames];
    updatedArray[index] = newValue;
    setFormInfo({
      ...formInfo,
      arrOfPlayersNames: updatedArray,
    });
  };

  const handleChange = (e) => {
    if (
      e.target.name === "totalNumOfPlayers" ||
      e.target.name === "numOfTeams" ||
      e.target.name === "numOfPlayersEachTeam"
    ) {
      setFormInfo({
        ...formInfo,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setFormInfo({
        ...formInfo,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleClickGenerateTeams = () => {
    // Original Array Of Players Name
    let originalArrOfNames = formInfo.arrOfPlayersNames;

    //Shuffle The Array Of Players Name
    let shuffledArrOfPlayersName = shuffleArray(originalArrOfNames);

    // Chunk The Array Of The Shuffled Array According to Number Of Players Each Team
    let chunkArr = chunk(
      shuffledArrOfPlayersName,
      formInfo.numOfPlayersEachTeam
    );

    // Slice The Chunked Array According To Number Of Teams
    let slicedArr = sliceArrFunc(chunkArr, 0, formInfo.numOfTeams);

    // Slice the Chunked Array In Order To Get The Players That Not Play This Round
    let playersNotPlayThisRound = sliceArrFunc(
      chunkArr,
      formInfo.numOfTeams,
      chunkArr.length
    );

    setTeamsPlayThisRound(slicedArr);
    setPlayersNotPlayThisRound(playersNotPlayThisRound);

    _next();
  };

  const resetApp = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <header className="app__header">
        <h3 className="app__title">
          sport teams generator <SportsBasketballRoundedIcon />
        </h3>

        {currentFormStep != 5 ? (
          <h5>step {currentFormStep}</h5>
        ) : (
          <h5>Display Teams Result</h5>
        )}
      </header>

      <main className="app__main">
        <form
          className={`${classes.root} app__form`}
          noValidate
          autoComplete="off"
        >
          <FormStep1
            onChange={handleChange}
            currentStepForm={currentFormStep}
          />
          <FormStep2
            onChange={handleChange}
            currentStepForm={currentFormStep}
          />

          <FormStep3
            onChange={handleChange}
            currentStepForm={currentFormStep}
          />
          <FormStep4
            onChange={handleChangeNamesOfPlayers}
            currentStepForm={currentFormStep}
            totalNumOfPlayers={formInfo.totalNumOfPlayers}
            sumMultPlayersEachTeamAndTeams={
              formInfo.numOfTeams * formInfo.numOfPlayersEachTeam
            }
            totalPlayers={formInfo.totalNumOfPlayers}
            onClick={handleClickGenerateTeams}
            resetApp={resetApp}
          />
        </form>
        <DisplayResults
          arrOfTeamsPlayThisRound={teamsPlayThisRound}
          currentStepForm={currentFormStep}
          playersNotPlayThisRound={PlayersNotPlayThisRound}
          resetApp={resetApp}
        />
      </main>

      {prevButton()}
      {nextButton()}
    </div>
  );
}

export default App;
