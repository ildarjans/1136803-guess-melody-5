import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Welcome} from "../welcome/welcome";
import {Login} from "../login/login";
import {Result} from "../result/result";
import {GameConnect} from "../game/game";

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
        <Route exact path="/result">
          <Result isWin={true}/>
        </Route>
        <Route exact path="/lose">
          <Result isWin={false}/>
        </Route>
        <Route exact path="/game">
          <GameConnect/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
