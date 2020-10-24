import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app';
import {questions} from "./mocks/questions";

const root = document.querySelector(`#root`);
ReactDOM.render(
    <App
      questions={questions}
    />,
    root
);
