import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { SideView } from "./SideView";
import { NoteView } from "./NoteView";
import { AppProvider } from "./AppProvider";
import { Home } from "./Home";

const AppContainerStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 1200px;
  width: 100%;
  height: 100%;
`;

const MainViewStyled = styled.div`
  height: 100%;
  margin-left: 300px;
  display: flex;
`;

const MainViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 750px;
  margin: 30px auto;
`;

export function App() {
  return (
    <AppContainerStyled>
      <Router>
        <AppProvider>
          <SideView />
          <MainViewStyled>
            <MainViewContainer>
              <Route path="/" exact component={Home} />
              <Route path="/:id" component={NoteView} />
            </MainViewContainer>
          </MainViewStyled>
        </AppProvider>
      </Router>
    </AppContainerStyled>
  );
}
