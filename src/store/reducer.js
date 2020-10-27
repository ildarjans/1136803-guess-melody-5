import {ActionType} from "./action-type";
import {questions} from "../mocks/questions";
import {extend} from "../utils";
import {MAX_ERROR_COUNT} from "../const";

const initialState = {
  mistakes: 0,
  step: 0,
  questions,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.INCREMENT_MISTAKES:
      const mistakes = state.mistakes + action.payload;
      return mistakes >= MAX_ERROR_COUNT ? extend({}, initialState) : extend(state, {mistakes});
    case ActionType.INCREMENT_STEPS:
      return extend(state, {
        step: state.step + action.payload
      });
    case ActionType.RESET_GAME:
      return extend({}, initialState);
  }
  return state;
}
