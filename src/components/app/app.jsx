import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";
import {Welcome} from "../welcome/welcome";
import {Login} from "../login/login";
import {Result} from "../result/result";
import {Game} from "../game/game";

export const App = ({questions}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact path="/"
          render={({history}) => {
            return (
              <Welcome
                onWelcomeButtonClick={() => history.push(`/game`)}
              />
            );
          }}
        />
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/result">
          <Result isWin={true}/>
        </Route>
        <Route exact path="/lose">
          <Result isWin={false}/>
        </Route>
        <Route exact path="/game">
          <Game
            questions={questions}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  questions: PropTypes.array.isRequired,
};
