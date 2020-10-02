import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  ERROR_COUNT: 3,
};

const root = document.querySelector(`#root`);

ReactDOM.render(
    <App errorsCount={Settings.ERROR_COUNT}/>,
    root
);

