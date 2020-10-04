import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Welcome from "../welcome/welcome";
import Login from "../login/login";
import ResultLose from "../result-lose/result-lose";
import ResultWin from "../result-win/result-win";
import GameArtist from "../game-artist/game-artist";
import GameGenre from "../game-genre/game-genre";


const App = (props) => {
  const {errorsCount} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Welcome errorsCount={errorsCount}/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/result">
          <ResultWin/>
        </Route>
        <Route exact path="/lose">
          <ResultLose/>
        </Route>
        <Route exact path="/dev-genre">
          <GameGenre/>
        </Route>
        <Route exact path="/dev-artist">
          <GameArtist/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
