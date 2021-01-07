// src/screens/ConversationsList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function ConversationsList() {
  const [conversations, setConversations] = useState({ status: "loading" });

  useEffect(() => {
    async function fetchData() {
      setConversations({ status: "loading" });
      try {
        // For testing, you could use:
        // if (Math.random() < 0.5) { throw "ERR"; }
        const res = await axios.get(
          "https://slack.com/api/conversations.list?exclude_archived=true&token=" +
            process.env.REACT_APP_SLACK_TOKEN
        );
        if (!res.data.ok) {
          // it turns out that Slack gives back errors
          //  with a 200 status code, so this is necessary
          throw new Error(res.data.error);
        }
        setConversations({ status: "success", data: res.data });
      } catch (error) {
        setConversations({ status: "error", error });
      }
    }

    fetchData();
  }, [setConversations]);

  return (
    <Container>
      
      {conversations.status === "loading" && <p>Loading...</p>}

      {conversations.status === "error" && <p>Error :(</p>}

      {conversations.status === "success" &&
        conversations.data.channels.map(channel => {
          return (
            <Item key={channel.id} to={`/c/${channel.id}`}>
              #{channel.name}
            </Item>
          );
        })}
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