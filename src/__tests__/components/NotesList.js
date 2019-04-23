import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import { NotesList } from "../../components/NotesList";

window.confirm = jest.fn().mockReturnValue(true);

describe("NotesList", () => {
  const props = {
    onSearch: jest.fn(),
    onClick: jest.fn(),
    onDelete: jest.fn(),
    data: [
      {
        id: "71c34d00-6357-11e9-8524-59c0881df9c7",
        createdAt: 1555756283344,
        noteTitle: "New note",
        textEditorInput: "sample text"
      }
    ],
    searchValue: ""
  };

  it("should render without errors", () => {
    const wrapper = mount(
      <Router keyLength={0}>
        <NotesList {...props} />
      </Router>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should call onDelete", () => {
    const wrapper = mount(
      <Router keyLength={0}>
        <NotesList {...props} />
      </Router>
    );

    wrapper.find("button#delete_button").simulate("click");
    expect(props.onDelete).toHaveBeenCalledWith(
      "71c34d00-6357-11e9-8524-59c0881df9c7"
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
