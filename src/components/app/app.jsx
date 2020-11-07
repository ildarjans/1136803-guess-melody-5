import React from "react";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import {Welcome} from "../welcome/welcome";
import {Login} from "../login/login";
import {Result} from "../result/result";
import {Game} from "../game/game";

export const App = () => {
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
        <Route
          exact path="/result"
          render={({history}) => {
            return (
              <Result
                onReplayButtonClick={() => history.push(`/game`)}
                isWin={true}
              />
            );
          }}
        >
        </Route>
        <Route
          exact path="/lose"
          render={({history}) => {
            return (
              <Result
                onReplayButtonClick={() => history.push(`/game`)}
                isWin={false}
              />
            );
          }}
        >
        </Route>
        <Route exact path="/game">
          <Game/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
