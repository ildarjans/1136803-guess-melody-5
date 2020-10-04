import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import WelcomeScreen from "../welcome-screen/welcome-screen";
import LoginScreen from "../login-screen/login-screen";
import ResultLoseScreen from "../result-lose-screen/result-lose-screen";
import ResultWinScreen from "../result-win-screen/result-win-screen";
import QuestionArtistScreen from "../question-artist-screen/question-artist-screen";
import QuestionGenreScreen from "../question-genre-screen/question-genre-screen";


const App = (props) => {
  const {errorsCount} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen errorsCount={errorsCount}/>
        </Route>
        <Route exact path="/login">
          <LoginScreen/>
        </Route>
        <Route exact path="/result">
          <ResultWinScreen/>
        </Route>
        <Route exact path="/lose">
          <ResultLoseScreen/>
        </Route>
        <Route exact path="/dev-genre">
          <QuestionGenreScreen/>
        </Route>
        <Route exact path="/dev-artist">
          <QuestionArtistScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
