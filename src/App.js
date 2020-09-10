import React, { useState } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  TextField,
  InputLabel,
  Input,
  FormHelperText,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Button,
} from "@material-ui/core";

function App() {
  /* const [numOfPlayers, setNumOfPlayers] = useState(10); // num of players- step 1
  const [numOfTeams, setNumOfTeams] = useState(0); // num of teams - step 2
  const [equalNumOfPlayersEachTeam, setEqualNumOfPlayersEachTeam] = useState(
    false
  ); // The number of players must be equal in each team? - step 3
  const [numOfPlayersEachTeam, setNumOfPlayersEachTeam] = useState(0); // num of players each team - step 4
  const [arrOfPlayerNames, setArrOfPlayerNames] = useState([]); // arr of player names - step 5*/
  const [currentFormStep, setCurrentFormStep] = useState(1); // current step form

  const [formInfo, setFormInfo] = useState({
    totalNumOfPlayers: 0,
    numOfTeams: 0,
    equalNumOfPlayersEachTeam: false,
    numOfPlayersEachTeam: 0,
    arrOfPlayersNames: [],
  });

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
    if (currentStep < 5) {
      return (
        <Button onClick={_next} type="button">
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
        <Button onClick={_prev} type="button">
          Prev
        </Button>
      );
    } else {
      return null;
    }
  };

  const _next = () => {
    let currentStep = currentFormStep;
    currentStep = currentStep >= 4 ? 5 : currentStep + 1;
    setCurrentFormStep(currentStep);
  };

  const _prev = () => {
    let currentStep = currentFormStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    setCurrentFormStep(currentStep);
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

  console.log(formInfo);

  return (
    <div className="app">
      <h1 className="app__title">sport teams generator</h1>

      <h5>step form number {currentFormStep}</h5>
      <form
        className={`${classes.root} app__form`}
        noValidate
        autoComplete="off"
      >
        <FormStep1 onChange={handleChange} currentStepForm={currentFormStep} />
        <FormStep2 onChange={handleChange} currentStepForm={currentFormStep} />
        <FormStep3
          value={formInfo.equalNumOfPlayersEachTeam}
          onChange={handleChange}
          currentStepForm={currentFormStep}
        />
        <FormStep4 onChange={handleChange} currentStepForm={currentFormStep} />
        <FormStep5
          onChange={handleChange}
          currentStepForm={currentFormStep}
          totalNumOfPlayers={formInfo.totalNumOfPlayers}
        />
      </form>

      {prevButton()}
      {nextButton()}
    </div>
  );
}

export default App;

function FormStep1(props) {
  if (props.currentStepForm !== 1) {
    return null;
  }
  return (
    <FormControl>
      <InputLabel htmlFor="total-num-of-players">enter number</InputLabel>
      <Input
        onChange={props.onChange}
        name="totalNumOfPlayers"
        id="total-num-of-players"
        aria-describedby="my-helper-text"
        type="number"
      />
      <FormHelperText id="my-helper-text">
        How many players in total participate?
      </FormHelperText>
    </FormControl>
  );
}

function FormStep2(props) {
  if (props.currentStepForm !== 2) {
    return null;
  }
  return (
    <FormControl>
      <InputLabel htmlFor="num-of-teams">enter number</InputLabel>
      <Input
        name="numOfTeams"
        id="num-of-teams"
        type="number"
        aria-describedby="my-helper-text"
        onChange={props.onChange}
      />
      <FormHelperText id="my-helper-text">
        How many teams do you want to generate?
      </FormHelperText>
    </FormControl>
  );
}

function FormStep3(props) {
  if (props.currentStepForm !== 3) {
    return null;
  }
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        The number of players must be equal in each team?
      </FormLabel>
      <RadioGroup value={props.value} onChange={props.onChange}>
        <FormControlLabel
          value="equalEachTeam"
          control={<Radio name="equalNumOfPlayersEachTeam" />}
          label="Yes"
        />
        <FormControlLabel
          value="noEqualEachTeam"
          control={<Radio name="equalNumOfPlayersEachTeam" />}
          label="No"
        />
      </RadioGroup>
    </FormControl>
  );
}

function FormStep4(props) {
  if (props.currentStepForm !== 4) {
    return null;
  }
  return (
    <FormControl>
      <InputLabel htmlFor="num-of-players-each-team">enter number</InputLabel>
      <Input
        name="numOfPlayersEachTeam"
        id="num-of-players-each-team"
        type="number"
        aria-describedby="my-helper-text"
        onChange={props.onChange}
      />
      <FormHelperText id="my-helper-text">
        Number of Players each team?
      </FormHelperText>
    </FormControl>
  );
}

function FormStep5(props) {
  if (props.currentStepForm !== 5) {
    return null;
  }
  return (
    <FormControl>
      <FormHelperText id="my-helper-text">Names of players</FormHelperText>

      {[...Array(props.totalNumOfPlayers)].map((player, index) => (
        <div key={index}>
          <Input id="some-id" aria-describedby="my-helper-text" />
          <Button>add player</Button>
        </div>
      ))}
    </FormControl>
  );
}

/*
      {props.totalNumOfPlayers.length > 0 &&
        props.totalNumOfPlayers.map((player) => (
          <div>
            <Input
              name={`player${props.totalNumOfPlayers.indexOf(player)}`}
              id={`player${props.totalNumOfPlayers.indexOf(player)}`}
              aria-describedby="my-helper-text"
            />
            <InputLabel
              htmlFor={`player${props.totalNumOfPlayers.indexOf(player)}`}
            >
              enter names
            </InputLabel>
          </div>
        ))}

*/

//////////////****///////*****///////**//////
/*
class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: "",
      username: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registration detail: \n 
           Email: ${email} \n 
           Username: ${username} \n
           Password: ${password}`);
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  };
*/
/*
 * the functions for our button
 */

/*
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }*/

/*
  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <h1>React Wizard Form 🧙‍♂️</h1>
        <p>Step {this.state.currentStep} </p>

        <form onSubmit={this.handleSubmit}>
   */
/*
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
          />
          {this.previousButton()}
          {this.nextButton()}
        </form>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="Enter email"
        value={props.email}
        onChange={props.handleChange}
      />
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <input
        className="form-control"
        id="username"
        name="username"
        type="text"
        placeholder="Enter username"
        value={props.username}
        onChange={props.handleChange}
      />
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={props.password}
          onChange={props.handleChange}
        />
      </div>
      <button className="btn btn-success btn-block">Sign up</button>
    </React.Fragment>
  );
}

ReactDOM.render(<MasterForm />, document.getElementById("root"));
*/
