import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import { NewNoteButton } from "../../components/NewNoteButton";

describe("NewNoteButton", () => {
  it("should render without errors", () => {
    const wrapper = mount(<NewNoteButton />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
