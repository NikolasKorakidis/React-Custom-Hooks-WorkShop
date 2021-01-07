// src/App.js
import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ConversationsList from "./screens/ConversationsList";
import ConversationThread from "./screens/ConversationThread";

export default function App() {
  return (
    <Router>
      <Container>
        <ConversationsList />
        <Route path="/c/:channel" component={ConversationThread} />
      </Container>
    </Router>
  );
}

const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;
