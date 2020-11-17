import {actionCreator} from "./actions";
import {
  AuthorizationStatus,
  ApiRoute,
  AppRoute
} from "../const";

export const fetchQuestionsList = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.QUESTIONS)
    .then(({data}) => dispatch(actionCreator.loadQuestions(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGIN)
    .then(() => dispatch(actionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const fetchAuth = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, {email, password})
    .then(() => dispatch(actionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH)))
    .then(() => dispatch(actionCreator.redirectToRoute(AppRoute.RESULT)))
);
