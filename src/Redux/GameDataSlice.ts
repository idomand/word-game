import { createSlice } from "@reduxjs/toolkit";
import data from "../German-words-data.json";

const randomStartingIndex = Math.floor(Math.random() * 1000);
export const firstWord = data[randomStartingIndex];

const initialState: GlobalState = {
  wordObject: firstWord,
  score: 0,
  userName: "ido",
  indexOfWordInArray: 0,
  indexOfWordInAllData: 0,
  arrayOfWords: [],
  isGameStated: false,
  isGameEnded: false,
  arrayOfWordsWrongAnswer: [],
  arrayOfWordsRightAnswer: [],
};

export const GameDataSlice = createSlice({
  name: "gameData",
  initialState: initialState,
  reducers: {
    GetArrayOfWord: (
      state,
      action: {
        type: string;
        payload: { numberOfWords: number; startingIndex: number };
      }
    ) => {
      const { numberOfWords, startingIndex } = action.payload;
      state.indexOfWordInAllData = startingIndex;
      const arrayOfWords = [];
      for (let i = startingIndex; i < startingIndex + numberOfWords; i++) {
        arrayOfWords.push(data[i]);
      }
      state.wordObject = arrayOfWords[0];
      state.isGameStated = true;
      state.arrayOfWords = arrayOfWords;
    },
  },
});

export const { GetArrayOfWord } = GameDataSlice.actions;
export default GameDataSlice.reducer;
