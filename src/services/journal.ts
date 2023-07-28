import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { JournalEntry, NewJournalEntry } from "../types/journal";
import { setIsLoading } from "../utils";
import { db } from "./firebase";

export const JournalService = {
  createNewEntry: async (entry: NewJournalEntry) => {
    setIsLoading(true);
    const response = setDoc(doc(db, "entries", entry.date), entry).finally(() =>
      setIsLoading(false)
    );
    return response;
  },
  updateEntry: async (entry: JournalEntry) => {
    setIsLoading(true);
    const response = setDoc(doc(db, "entries", entry.date), entry).finally(() =>
      setIsLoading(false)
    );
    return response;
  },
  getEntries: async () => {
    setIsLoading(true);
    const response = getDocs(collection(db, "entries"))
      .then((res) => res.docs.map((doc) => doc.data() as JournalEntry))
      .finally(() => setIsLoading(false));
    return response;
  },
  getEntry: async (date: string) => {
    setIsLoading(true);
    const response = getDoc(doc(db, "entries", date))
      .then((res) => (res.exists() ? (res.data() as JournalEntry) : null))
      .catch((err) => {
        console.log(err);
        return null;
      })
      .finally(() => setIsLoading(false));
    return response;
  },
};
