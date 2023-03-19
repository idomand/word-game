import { getArrayOfWordsFromFirebase } from "../Firebase/FirestoreCrud";
import data from "../German-words-data.json";

const randomStartingIndex = Math.floor(Math.random() * 1000);

export const firstWord = data[randomStartingIndex];

type UpdateScoreAction = {
  type: "update-score";
  payload: {
    score: number;
  };
};

type GetArrayOfWord = {
  type: "get-array-of-words";
  payload: {
    numberOfWords: number;
    startingIndex: number;
  };
};

type CheckQuestion = {
  type: "check-question";
  payload: {
    isAnswerCorrect: boolean;
  };
};
type CheckLastQuestion = {
  type: "check-last-question";
  payload: {
    isAnswerCorrect: boolean;
  };
};

type RestartGame = {
  type: "restart-game";
};

export type GameReducerActions =
  | UpdateScoreAction
  | GetArrayOfWord
  | CheckQuestion
  | CheckLastQuestion
  | RestartGame;

export default function GameReducer(
  state: GlobalState,
  action: GameReducerActions
) {
  if (action.type === "update-score") {
    const { score } = action.payload;
    return { ...state, score };
  } else if (action.type === "get-array-of-words") {
    const { numberOfWords, startingIndex } = action.payload;

    // const foo = getArrayOfWordsFromFirebase(numberOfWords);
    // state.indexOfWordInAllData = startingIndex;
    // const arrayOfWords = [];
    // for (let i = startingIndex; i < startingIndex + numberOfWords; i++) {
    //   arrayOfWords.push(data[i]);
    // }
    // state.wordObject = arrayOfWords[0];
    // return { ...state, arrayOfWords };

    state.indexOfWordInAllData = startingIndex;
    const arrayOfWords = [];
    for (let i = startingIndex; i < startingIndex + numberOfWords; i++) {
      arrayOfWords.push(data[i]);
    }
    state.wordObject = arrayOfWords[0];
    state.isGameStated = true;
    return { ...state, arrayOfWords };
  } else if (action.type === "check-question") {
    let { isAnswerCorrect } = action.payload;
    if (isAnswerCorrect) {
      state.score = state.score + 1;
      state.arrayOfWordsRightAnswer.push(state.wordObject);
    } else {
      state.arrayOfWordsWrongAnswer.push(state.wordObject);
    }
    console.log("arrayOfWordsRightAnswer", state.arrayOfWordsRightAnswer);
    console.log("arrayOfWordsWrongAnswer", state.arrayOfWordsWrongAnswer);

    const wordObject = state.arrayOfWords[state.indexOfWordInArray + 1];
    state.indexOfWordInArray = state.indexOfWordInArray + 1;
    return { ...state, wordObject };
  } else if (action.type === "check-last-question") {
    let { isAnswerCorrect } = action.payload;
    if (isAnswerCorrect) {
      state.score = state.score + 1;
      state.arrayOfWordsRightAnswer.push(state.wordObject);
    } else {
      state.arrayOfWordsWrongAnswer.push(state.wordObject);
    }
    console.log("arrayOfWordsRightAnswer", state.arrayOfWordsRightAnswer);
    console.log("arrayOfWordsWrongAnswer", state.arrayOfWordsWrongAnswer);
    state.isGameEnded = true;
    state.isGameStated = false;

    return { ...state };
  } else if (action.type === "restart-game") {
    state.isGameEnded = false;
    state.isGameStated = false;
    state.arrayOfWords = [];
    state.arrayOfWordsRightAnswer = [];
    state.arrayOfWordsWrongAnswer = [];
    state.score = 0;
    state.userName = "ido";
    state.indexOfWordInArray = 0;
    state.indexOfWordInAllData = 0;

    return { ...state };
  }

  return state;
}
