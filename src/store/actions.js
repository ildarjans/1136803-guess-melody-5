import {GameType} from "../const";
import {
  isArtistAnswerCorrect,
  isGenreAnswerCorrect,
} from "../game-utils";

export const ActionType = {
  INCREMENT_STEPS: `INCREMENT_STEPS`,
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  RESET_GAME: `RESET_GAME`,
  LOAD_QUESTIONS: `LOAD_QUESTIONS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`
};

export const actionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEPS,
    payload: 1,
  }),
  incrementMistake: (question, userAnswer) => {
    let isAnswerCorrect = false;
    switch (question.type) {
      case GameType.ARTIST:
        isAnswerCorrect = isArtistAnswerCorrect(question, userAnswer);
        break;
      case GameType.GENRE:
        isAnswerCorrect = isGenreAnswerCorrect(question, userAnswer);
        break;
    }

    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: isAnswerCorrect ? 0 : 1
    };

  },
  resetGame: () => ({
    type: ActionType.RESET_GAME,
  }),
  loadQuestions: (questions) => ({
    type: ActionType.LOAD_QUESTIONS,
    payload: questions,
  }),
  setAuthorizationStatus: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  })
};
