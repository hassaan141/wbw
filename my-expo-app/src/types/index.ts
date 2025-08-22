export interface Surah {
  number: number;
  name: string;
  englishName: string;
  numberOfAyahs: number;
  revelationType: string;
}

export interface Verse {
  number: number;
  numberInSurah: number;
  text: string;
}

export interface WordData {
  words: {
    arabic: string;
    translation: string;
    choices: string[];
  }[];
}

export interface UserProgress {
  surah_number: number;
  verse_number: number;
  completed: boolean;
  completed_at: string;
}
