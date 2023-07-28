export interface NewJournalEntry {
  date: string;
  entry: string;
  rating: number;
}

export interface JournalEntry extends NewJournalEntry {
  id: string;
}
