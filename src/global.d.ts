type basicWord = {
  word: string;
  Plural: string;
  Meaning: string;
  Artikel: string;
};

type GlobalState = {
  userName: string;
  user: any;
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
