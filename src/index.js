import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app';
import {Settings} from "./const";
import questions from "./mocks/questions";

const root = document.querySelector(`#root`);

ReactDOM.render(
    <App
      errorsCount={Settings.ERROR_COUNT}
      questions={questions}
    />,
    root
);
