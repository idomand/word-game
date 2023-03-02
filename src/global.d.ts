type basicWord = {
  word: string;
  Plural: string;
  Meaning: string;
  Artikel: string;
};

type GlobalState = {
  word: basicWord;
  indexOfWord: number;
  arrayOfWords: basicWord[];
  score: number;
  userName: string;
};
