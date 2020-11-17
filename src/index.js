import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import {rootReducer} from "./store/root-reducer";
import {actionCreator} from "./store/actions";
import {createAPI} from "./services/api";
import {AuthorizationStatus} from "./const";
import {fetchQuestionsList, checkAuth} from "./store/api-actons";

import {App} from "./components/app/app";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(
    () => store.dispatch(actionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchQuestionsList()),
  store.dispatch(checkAuth())
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>,
      </Provider>,
      document.querySelector(`#root`)
  );
});


