import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import { TextEditor } from "../../components/TextEditor";

describe("TextEditor", () => {
  it("should render without errors", () => {
    const props = {
      onEditorChange: jest.fn(),
      save: jest.fn(),
      textEditorInput: ""
    };
    const wrapper = mount(<TextEditor {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should call onEditorChange onchange and save on blur", () => {
    const props = {
      onEditorChange: jest.fn(),
      save: jest.fn(),
      textEditorInput: ""
    };

    const wrapper = mount(<TextEditor {...props} />);
    wrapper
      .find("textarea")
      .simulate("change", { target: { value: "new note" } })
      .simulate("blur");
    expect(props.onEditorChange).toHaveBeenCalled();
    expect(props.save).toHaveBeenCalled();
  });
});
