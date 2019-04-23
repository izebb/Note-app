import { Collection } from "./Collection";

const LOCAL_DB = "note_app";

export class Notes extends Collection {
  constructor() {
    super(LOCAL_DB);
  }
  search = val => {
    const pattern = new RegExp(`${val}`, "ig");
    const notes = this.get();

    if (val.length < 2) {
      return notes;
    }

    const filteredNotes = notes.filter(item => {
      return pattern.test(item.noteTitle) || pattern.test(item.textEditorInput);
    });

    return filteredNotes.length !== notes.length ? filteredNotes : notes;
  };
}
