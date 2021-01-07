// src/screens/ConversationThread.js
import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Message from "../components/Message";

export default function ConversationThread() {
  const { channel = "" } = useParams();

  return (
    <Container>
      <p>Channel: #{channel}</p>
      <Message text="Hello there!" sender="Kelley" sentAt="2:58 PM" />
      <Message
        text="This is just dummy data for now"
        sender="Student Talk"
        sentAt="3:12 PM"
      />
      <Message
        text="One last message just for completeness' sake"
        sender="Someone else"
        sentAt="3:20 PM"
      />
    </Container>
  );
}

const Container = styled.div`
  flex: 1 0 auto;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;