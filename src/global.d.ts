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
  arrayOfWords: basicWord[];
  score: number;
  userName: string;
};
