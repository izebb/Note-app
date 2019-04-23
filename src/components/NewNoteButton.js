import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { NotesList } from "./NotesList";

const NewNoteStyled = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NewButtonStyled = styled.button`
  color: #fff;
  background-color: #6021f3;
  padding: 0 50px;
  height: 37px;
  font-size: 13px;
  border-radius: 5px;
  height: 37px;
  font-size: 13px;
  border-radius: 50px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.32);
  border: none;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  &:focus {
    text-decoration: none;
  }
`;

export function NewNoteButton({ onClick }) {
  return (
    <NewNoteStyled>
      <NewButtonStyled onClick={onClick}>Add Note</NewButtonStyled>
    </NewNoteStyled>
  );
}

NewNoteButton.defaultProps = {
  onClick: () => {}
};
