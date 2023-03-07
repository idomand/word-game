import data from "../German-words-data.json";

const randomStartingIndex = Math.floor(Math.random() * 1000);

export const firstWord = data[randomStartingIndex];

type UpdateWordAction = {
  type: "update-word";
  payload: {
    indexOfWord: number;
  };
};

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

export type GameReducerActions =
  | UpdateScoreAction
  | UpdateWordAction
  | GetArrayOfWord
  | CheckQuestion;

export default function GameReducer(
  state: GlobalState,
  action: GameReducerActions
) {
  if (action.type === "update-score") {
    console.log(
      "%c action-type: update-score ",
      "background: yellow; color: black"
    );

    const { score } = action.payload;
    return { ...state, score };
  } else if (action.type === "get-array-of-words") {
    console.log(
      "%c action-type: get-array-of-words ",
      "background: yellow; color: black"
    );
    const { numberOfWords, startingIndex } = action.payload;
    const arrayOfWords = [];
    for (let i = startingIndex; i < startingIndex + numberOfWords; i++) {
      arrayOfWords.push(data[i]);
    }
    const word = arrayOfWords[0];
    return { ...state, word, arrayOfWords };
  } else if (action.type === "update-word") {
    console.log(
      "%c action-type: update-score ",
      "background: yellow; update-word"
    );
    const wordObject = state.arrayOfWords[state.indexOfWord + 1];
    return { ...state, wordObject };
  } else if (action.type === "check-question") {
    console.log(
      "%c action-type: check-question ",
      "background: lightblue; color: black"
    );
    console.log("state.wordObject", state.wordObject);
    let { isAnswerCorrect, score } = action.payload;
    if (isAnswerCorrect) {
      score = score + 1;
    }
    const wordObject = state.arrayOfWords[state.indexOfWord + 1];
    console.log("wordObject", wordObject);
    return { ...state, wordObject, score };
  }

  return state;
}
