import React, { createContext, Component } from "react";
import { withRouter } from "react-router-dom";

import { Notes } from "../utils/notes";

const AppContext = React.createContext();

export class Provider extends Component {
  constructor(props) {
    super(props);

    this.notes = new Notes();

    this.state = {
      notes: this.getNotes(),
      textEditorInput: "",
      noteTitle: "",
      searchValue: "",
      getNoteById: this.getNoteById,
      onSearch: this.onSearch,
      createNote: this.createNote,
      onTitleChange: this.onTitleChange,
      onEditorChange: this.onEditorChange,
      deleteNote: this.deleteNote,
      updateNote: this.updateNote,
      addNote: this.addNote
    };
  }

  getNotes() {
    return [...this.notes.get()].reverse();
  }

  deleteNote = id => {
    this.notes.delete(id);
    const notes = this.getNotes();

    this.setState({ notes }, this.redirectToNote);
  };

  updateNote = id => {
    const { textEditorInput, noteTitle } = this.state;

    if (noteTitle.trim()) {
      this.notes.update(id, {
        noteTitle,
        textEditorInput
      });

      this.setState({
        notes: this.getNotes()
      });
    }
  };

  createNote = () => {
    const { textEditorInput, noteTitle } = this.state;
    const id = this.notes.create({
      noteTitle: "New note",
      textEditorInput: ""
    });

    this.setState(
      {
        searchValue: "",
        notes: this.getNotes()
      },
      () => this.redirectToNote(id)
    );
  };

  redirectToNote = (id = "") => {
    const { history } = this.props;

    history.push(`/${id}`);
  };

  onEditorChange = e => {
    this.setState({
      textEditorInput: e.target.value
    });
  };

  onSearch = e => {
    const value = e.target.value;

    this.setState({
      searchValue: e.target.value,
      notes: this.notes.search(value.trim())
    });
  };

  onTitleChange = e => {
    this.setState({
      noteTitle: e.target.value
    });
  };

  getNoteById = id => {
    const item = this.notes.get(id);

    if (item) {
      this.setState(item);
    } else {
      this.redirectToNote();
    }
  };

  render() {
    return (
      <AppContext.Provider value={{ ...this.state }} {...this.props}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppConsumer = AppContext.Consumer;
const AppProvider = withRouter(Provider);

export { AppContext, AppConsumer, AppProvider };
