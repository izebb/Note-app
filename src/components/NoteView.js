import React, { Fragment, useContext, useEffect } from "react";
import styled from "styled-components";

import { AppContext } from "./AppProvider";
import { TextEditor } from "./TextEditor";

const ViewPaperContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid #e6e6e6;
  position: relative;
  background-color: rgba(244, 255, 254, 0.78);

  &:before {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid #efefef;
    top: 0;
    z-index: -1;
    box-shadow: 1px 2px 10px #f6fffe;
  }
`;

const ViewTitleBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NoteTitleStyled = styled.input`
  width: 100%;
  height: 58px;
  padding: 7px 10px;
  font-size: 20px;
  font-weight: 700;
  background: transparent;
  border: none;
  border-bottom: 1px solid #90b7b4;
  &:focus {
    outline: none;
    border-bottom: 1px solid #5f7d8c;
  }
`;

export function NoteView({ match }) {
  const {
    saveNote,
    noteTitle,
    onTitleChange,
    textEditorInput,
    onEditorChange,
    getNoteById,
    deleteNote,
    updateNote
  } = useContext(AppContext);
  const { id = "" } = match.params;

  useEffect(() => {
    if (id) {
      getNoteById(id);
    }
  }, [id]);

  return (
    <ViewPaperContainer>
      <ViewTitleBarStyled>
        <NoteTitleStyled
          onBlur={() => updateNote(id)}
          value={noteTitle}
          placeholder="Title of note"
          onChange={onTitleChange}
        />
      </ViewTitleBarStyled>
      <TextEditor
        save={() => updateNote(id)}
        onEditorChange={onEditorChange}
        textEditorInput={textEditorInput}
      />
    </ViewPaperContainer>
  );
}
