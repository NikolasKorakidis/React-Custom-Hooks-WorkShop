// src/screens/ConversationsList.js
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function ConversationsList() {
  return (
    <Container>
      <Item to="/c/general">#general</Item>
      <Item to="/c/errors">#errors</Item>
      <Item to="/c/random">#random</Item>
    </Container>
  );
}

const Container = styled.div`
  flex: 0 0 260px;
  padding: 0.5rem 0;
  border-right: 1px solid #ddd;
`;

const Item = styled(NavLink)`
  display: block;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  color: black;

  &:focus {
    background: #f5f5f5;
  }

  &:active {
    background: #eee;
  }

  /* automatically added by react-router-dom */
  &.active {
    color: white;
    background: #333;
  }
`;