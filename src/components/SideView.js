import React, { useContext } from "react";
import styled from "styled-components";

import { AppContext } from "./AppProvider";
import { NotesList } from "./NotesList";
import { NewNoteButton } from "./NewNoteButton";

const SideViewStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: #576cff;
  padding: 15px 0 0 0;
  display: flex;
  flex-direction: column;
`;

export function SideView() {
  const { notes, createNote, deleteNote, searchValue, onSearch } = useContext(
    AppContext
  );

  return (
    <SideViewStyled>
      <NewNoteButton onClick={createNote} />
      <NotesList
        data={notes}
        onDelete={deleteNote}
        onSearch={onSearch}
        searchValue={searchValue}
      />
    </SideViewStyled>
  );
}
