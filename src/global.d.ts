import { User } from "firebase/auth";

export type BasicWordType = {
  word: string;
  Plural: string;
  Meaning: string;
  // Artikel: string;
  Artikel: "Der" | "Die" | "Das";

  wordId: string;
};

export type GlobalStateType = {
  userName: string | null;
  userId: string | null;
  userEmail: string | null;
  // currentUser: null | User;
  userTopScore: number;
  generalTopScore: number;
  wordObject: basicWord;
  indexOfWordInAllData: number;
  indexOfWordInArray: number;
  score: number;
  isGameStated: boolean;
  isGameEnded: boolean;
  arrayOfWords: basicWord[];
  arrayOfWordsWrongAnswer: basicWord[];
  arrayOfWordsRightAnswer: basicWord[];
};
