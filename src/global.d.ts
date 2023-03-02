type basicWord = {
  word: string;
  Meaning: string;
  Artikel: string;
  Plural: string;
};

type GlobalState = {
  arrayOfWord: basicWord[];
  word: basicWord;
  indexOfWord: number;
  score: number;
  userName: string;
};
