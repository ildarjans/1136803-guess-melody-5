import {ActionType} from "../../actions";
import {extend} from "../../../utils";


const initialState = {
  questions: []
};

export function gameDataReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.LOAD_QUESTIONS:
      return extend(state, {questions: action.payload});
  }
  return state;
}
