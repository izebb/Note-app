import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "./AppProvider";
import { NewNoteButton } from "./NewNoteButton";

import journalImage from "../images/journal.svg";

const ImgStyled = styled.img`
  height: 240px;
  opacity: 0.35;
`;

const TextStyled = styled.p`
  color: #444;
  margin-bottom: 20px;
`;

const EmptyContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  font-weight: 300;
  font-size: 30px;
  padding-top: 130px;
  color: #444;
`;

export function Home() {
  const { notes, createNote } = useContext(AppContext);
  const item = notes[0];

  if (item) {
    return <Redirect to={`/${item.id}`} replace />;
  }

  return (
    <EmptyContainerStyled>
      <ImgStyled src={journalImage} />
      <TextStyled>You do not have any notes. Let's make one for you</TextStyled>
      <div>
        <NewNoteButton onClick={createNote} />
      </div>
    </EmptyContainerStyled>
  );
}
