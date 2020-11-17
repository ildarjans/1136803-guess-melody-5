import React from "react";
import {
  Router,
  Route,
  Switch
} from "react-router-dom";

import {browserHistory} from "../../browse-history";
import {AppRoute} from "../../const";

import {Welcome} from "../welcome/welcome";
import {Login} from "../login/login";
import {Result} from "../result/result";
import {Game} from "../game/game";
import {PrivateRoute} from "../private-route/private-route";

export const App = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route
          exact path={AppRoute.ROOT}
          render={({history}) => {
            return (
              <Welcome
                onWelcomeButtonClick={() => history.push(AppRoute.GAME)}
              />
            );
          }}
        />
        <Route
          exact
          path={AppRoute.LOGIN}
          render={({history}) => {
            return (
              <Login
                onReplayButtonClick={() => history.push(AppRoute.GAME)}
              />
            );
          }}
        >
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.RESULT}
          render={({history}) => {
            return (
              <Result
                onReplayButtonClick={() => history.push(AppRoute.GAME)}
                isWin={true}
              />
            );
          }}
        >
        </PrivateRoute>
        <Route
          exact path={AppRoute.LOSE}
          render={({history}) => {
            return (
              <Result
                onReplayButtonClick={() => history.push(AppRoute.GAME)}
                isWin={false}
              />
            );
          }}
        >
        </Route>
        <Route exact path={AppRoute.GAME}>
          <Game/>
        </Route>
      </Switch>
    </Router>
  );
};
