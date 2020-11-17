import {browserHistory} from "../../browse-history";
import {ActionType} from "../actions";

export const redirect = () => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
