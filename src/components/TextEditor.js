import React from "react";
import styled from "styled-components";

const EditorContainerStyled = styled.div`
  flex: 1;
`;

const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  border: none;
  height: 100%;
  background: transparent;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 300;
  padding: 20px;
  white-space: pre-wrap;
  resize: none;

  &:focus {
    outline: none;
  }
`;

export function TextEditor({ onEditorChange, save, textEditorInput }) {
  return (
    <EditorContainerStyled>
      <TextArea
        onBlur={save}
        value={textEditorInput}
        onChange={onEditorChange}
      />
    </EditorContainerStyled>
  );
}
