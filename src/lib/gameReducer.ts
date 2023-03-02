import data from "../German-words-data.json";

export const firstWord = data[4];

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

export type GameReducerActions =
  | UpdateScoreAction
  | UpdateWordAction
  | GetArrayOfWord;

export default function GameReducer(
  state: GlobalState,
  action: GameReducerActions
) {
  if (action.type === "update-score") {
    const { score } = action.payload;
    return { ...state, score };
  } else if (action.type === "update-word") {
    const { indexOfWord } = action.payload;
    return { ...state, indexOfWord };
  } else if (action.type === "get-array-of-words") {
    const { numberOfWords, startingIndex } = action.payload;
    const arrayOfWords = [];
    for (let i = startingIndex; i < startingIndex + numberOfWords; i++) {
      arrayOfWords.push(data[i]);
    }
    const word = arrayOfWords[0];
    return { ...state, word, arrayOfWords };
  }
  return state;
}
