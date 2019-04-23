import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import * as ReactRouterDOM from "react-router-dom";

import { Home } from "../../components/Home";
import { AppProvider } from "../../components/AppProvider";

ReactRouterDOM.Redirect = jest.fn().mockReturnValue(<div />);

const renderComponent = value => {
  const props = value ? { value } : {};

  return (
    <ReactRouterDOM.MemoryRouter keyLength={0}>
      <AppProvider {...props}>
        <Home />
      </AppProvider>
    </ReactRouterDOM.MemoryRouter>
  );
};
describe("Home", () => {
  it("should render without errors", () => {
    const wrapper = mount(renderComponent());

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should redirect to NoteView", () => {
    const context = {
      createNote: jest.fn(),
      notes: [
        {
          id: "71c34d00-6357-11e9-8524-59c0881df9c7",
          createdAt: 1555756283344,
          noteTitle: "New note",
          textEditorInput: "sadsdadasdeadadasdasasd"
        }
      ]
    };

    const wrapper = mount(renderComponent(context));

    expect(toJson(wrapper)).toMatchSnapshot();
    expect(ReactRouterDOM.Redirect).toHaveBeenCalled();
  });
});
