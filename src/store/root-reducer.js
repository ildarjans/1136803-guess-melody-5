import {combineReducers} from "redux";

import {gameProcessReducer} from "./reducers/game-process/game-process";
import {gameDataReducer} from "./reducers/game-data/game-data";
import {userReducer} from "./reducers/user/user";

const NameSpace = {
  DATA: `DATA`,
  GAME: `GAME`,
  USER: `USER`
};

export const rootReducer = combineReducers({
  [NameSpace.DATA]: gameDataReducer,
  [NameSpace.GAME]: gameProcessReducer,
  [NameSpace.USER]: userReducer,
});
