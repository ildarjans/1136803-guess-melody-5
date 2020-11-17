import {ActionType} from "../../actions";
import {extend} from "../../../utils";
import {AuthorizationStatus} from "../../../const";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {authorizationStatus: action.payload});
  }
  return state;
}
