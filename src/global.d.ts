type basicWord = {
  word: string;
  Plural: string;
  Meaning: string;
  Artikel: string;
};

type GlobalState = {
  wordObject: basicWord;
  indexOfWordInAllData: number;
  indexOfWordInArray: number;
  score: number;
  userName: string;
  isGameStated: boolean;
  isGameEnded: boolean;
  arrayOfWords: basicWord[];
  arrayOfWordsWrongAnswer: basicWord[];
  arrayOfWordsRightAnswer: basicWord[];
};
