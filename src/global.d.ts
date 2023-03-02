type basicWord = {
  word: string;
  Meaning: string;
  Artikel: string;
  Plural: string;
};

type GlobalState = {
  word: basicWord;
  indexOfWord: number;
  arrayOfWord: basicWord[];
  score: number;
  userName: string;
};
