import { Notes } from "../../utils/Notes";

describe("Notes", () => {
  const notes = new Notes();

  it("should create note", () => {
    const id = notes.create({
      noteTitle: "lorem ipsum",
      textEditorInput: "some random note"
    });

    expect(notes.get(id)).toMatchObject({
      id,
      noteTitle: "lorem ipsum",
      textEditorInput: "some random note"
    });
  });

  it("should search note", () => {
    expect(notes.search("this should not exist").length).toEqual(0);
    expect(notes.search("lorem").length).toEqual(1);
  });

  it("should update note", () => {
    const note = notes.get();
    notes.update(note[0].id, { noteTitle: "some random title" });

    expect(notes.get(note[0].id).noteTitle).toEqual("some random title");
  });

  it("should delete note", () => {
    const note = notes.get();
    notes.delete(note[0].id);

    expect(notes.get(note[0].id)).toEqual(undefined);
  });
});
