import { getArrayOfWordsFromFirebase } from "../Firebase/FirestoreCrud";
// import data from "../German-words-data.json";

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
    score: number;
  };
};
type CheckLastQuestion = {
  type: "check-last-question";
  payload: {
    isAnswerCorrect: boolean;
    score: number;
  };
};
export type GameReducerActions =
  | UpdateScoreAction
  | GetArrayOfWord
  | CheckQuestion
  | CheckLastQuestion;

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
    // arrayOfWords.push(data[i]);
    // }
    // state.wordObject = arrayOfWords[0];
    // return { ...state, arrayOfWords };
  } else if (action.type === "check-question") {
    let { isAnswerCorrect, score } = action.payload;
    if (isAnswerCorrect) {
      score = score + 1;
    }

    const wordObject = state.arrayOfWords[state.indexOfWordInArray + 1];
    state.indexOfWordInArray = state.indexOfWordInArray + 1;
    return { ...state, wordObject, score };
  } else if (action.type === "check-last-question") {
    return { ...state };
  }

  return state;
}
