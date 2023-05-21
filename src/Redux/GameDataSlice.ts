import { createSlice } from "@reduxjs/toolkit";
import data from "../German-words-data.json";

const randomStartingIndex = Math.floor(Math.random() * 1000);
export const firstWord = data[randomStartingIndex];

const initialState: GlobalState = {
  wordObject: firstWord,
  score: 0,
  user: "anonymous",
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
    LoginUser: (
      state,
      action: {
        type: string;
        payload: { user: any };
      }
    ) => {
      state.user = action.payload.user;
    },

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
    CheckQuestion: (
      state,
      action: {
        type: string;
        payload: { isAnswerCorrect: boolean };
      }
    ) => {
      let { isAnswerCorrect } = action.payload;
      if (isAnswerCorrect) {
        state.score += 1;
        state.arrayOfWordsRightAnswer.push(state.wordObject);
      } else {
        state.arrayOfWordsWrongAnswer.push(state.wordObject);
      }
      state.wordObject = state.arrayOfWords[state.indexOfWordInArray + 1];
      state.indexOfWordInArray = state.indexOfWordInArray + 1;
    },
    CheckLastQuestion: (
      state,
      action: {
        type: string;
        payload: { isAnswerCorrect: boolean };
      }
    ) => {
      let { isAnswerCorrect } = action.payload;
      if (isAnswerCorrect) {
        state.score = state.score + 1;
        state.arrayOfWordsRightAnswer.push(state.wordObject);
      } else {
        state.arrayOfWordsWrongAnswer.push(state.wordObject);
      }
      state.isGameEnded = true;
      state.isGameStated = false;
    },
    RestartGame: (state) => {
      state.isGameEnded = false;
      state.isGameStated = false;
      state.arrayOfWords = [];
      state.arrayOfWordsRightAnswer = [];
      state.arrayOfWordsWrongAnswer = [];
      state.score = 0;
      state.userName = "ido";
      state.indexOfWordInArray = 0;
      state.indexOfWordInAllData = 0;
    },
  },
});

export const {
  GetArrayOfWord,
  CheckLastQuestion,
  CheckQuestion,
  RestartGame,
  LoginUser,
} = GameDataSlice.actions;
export default GameDataSlice.reducer;
