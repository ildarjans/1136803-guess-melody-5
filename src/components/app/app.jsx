import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from "prop-types";
import {Welcome} from "../welcome/welcome";
import {Login} from "../login/login";
import {ResultLose} from "../result-lose/result-lose";
import {ResultWin} from "../result-win/result-win";
import {GameArtist} from "../game-artist/game-artist";
import {GameGenre} from "../game-genre/game-genre";
import {Game} from "../game/game";


export const App = ({errorsCount, questions}) => {
  const [genreQuestion, artistQuestion] = questions;
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact path="/"
          render={({history}) => {
            return (
              <Welcome
                errorsCount={errorsCount}
                onWelcomeButtonClick={() => history.push(`/game`)}
              />
            );
          }}
        />
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
          <GameGenre
            question={genreQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path="/dev-artist">
          <GameArtist
            question={artistQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path="/game">
          <Game
            errorsCount={errorsCount}
            questions={questions}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};
