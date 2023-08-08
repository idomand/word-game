import { createSlice } from "@reduxjs/toolkit";
import data from "../German-words-data.json";
import { BasicWordType, GlobalStateType } from "../global";
const randomStartingIndex = Math.floor(Math.random() * 1000);
export const firstWord = data[randomStartingIndex];

const initialState: GlobalStateType = {
  wordObject: firstWord,
  score: 0,
  // currentUser: null,
  userName: null,
  userId: null,
  userEmail: null,
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
        payload: { userName: null | string; userId: null | string };
      }
    ) => {
      if (action.payload.userName) {
        // state.currentUser = action.payload.currentUser;
        state.userName = action.payload.userName;
        state.userId = action.payload.userId;
      } else {
        state.userName = null;
        state.userId = null;
      }
    },

    GetAllWordsFromFirestore: (
      state,
      action: {
        payload: any;
      }
    ) => {
      state.arrayOfWords = action.payload.data[0].allWords;
    },

    GetArrayOfWords: (
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
      state.indexOfWordInArray = 0;
      state.indexOfWordInAllData = 0;
    },
  },
});

export const {
  GetArrayOfWords,
  CheckLastQuestion,
  CheckQuestion,
  RestartGame,
  LoginUser,
  GetAllWordsFromFirestore,
} = GameDataSlice.actions;
export default GameDataSlice.reducer;
