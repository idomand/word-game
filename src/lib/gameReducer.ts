import data from "../German-words-data.json";

export const firstWord = data[1];

type GameReducerState = {
  word: {
    word: string;
    Meaning: string;
    Artikel: string;
    Plural: string;
  };
  score: number;
  userName: string;
};

export type GameReducerActions = {
  type: "update-score";
  payload: {
    score: number;
  };
};

export default function GameReducer(
  state: GameReducerState,
  action: GameReducerActions
) {
  if (action.type === "update-score") {
    const { score } = action.payload;
    return { ...state, score };
  }

  return state;
}
