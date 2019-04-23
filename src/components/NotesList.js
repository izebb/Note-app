import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import dateFormat from "dateFormat";

import binIcon from "../images/bin.svg";
import { AppContext } from "./AppProvider";

const NoteListContainerStyled = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  width: 40px;
  position: absolute;
  right: 5px;
  opacity: 0;
  transform: translateX(20px);
  transition: transform 200ms ease-out, opacity 150ms ease-out;
`;

const NoteItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 20px 12px 20px;
  margin-left: 40px;
  color: #ccc;
  border-bottom: 1px dashed #b5b5b5;
  text-decoration: none;
  position: relative;
  padding-right: 45px;
  overflow: hidden;

  &:hover {
    ${DeleteButton} {
      opacity: 0.8;
      transform: none;
    }
  }
  &.selected {
    color: #fff;
  }
`;

const NoteItemTitleStyled = styled.div`
  font-weight: 700;
`;

const NoteItemDateStyled = styled.div`
  font-size: 12px;
  margin-top: 20px;
`;

const SearchContainerStyled = styled.div`
  padding: 0 30px;
  margin: 10px 0;
`;

const SearchStyled = styled.input`
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  border: none;
  padding: 0 5px;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;

export function NotesList({ searchValue, onSearch, data, onClick, onDelete }) {
  const removeNote = id => () => {
    if (confirm("Do you really wanna delete this note")) {
      onDelete(id);
    }
  };

  return (
    <NoteListContainerStyled>
      <SearchContainerStyled>
        <SearchStyled
          value={searchValue}
          onChange={onSearch}
          placeholder="Search Notes..."
        />
      </SearchContainerStyled>
      {data.map(item => {
        return (
          <NoteItemStyled
            className="note"
            as={NavLink}
            key={item.id}
            to={`/${item.id}`}
            activeClassName="selected"
          >
            <NoteItemTitleStyled>{item.noteTitle}</NoteItemTitleStyled>
            <NoteItemDateStyled>
              {dateFormat(item.createdAt, "mmmm dS, yyyy, h:MM:ss TT")}
            </NoteItemDateStyled>
            <DeleteButton id="delete_button" onClick={removeNote(item.id)}>
              <img src={binIcon} />
            </DeleteButton>
          </NoteItemStyled>
        );
      })}
    </NoteListContainerStyled>
  );
}

NotesList.defaultProps = {
  data: [],
  onClick: () => {},
  onDelete: () => {},
  onSearch: () => {}
};
