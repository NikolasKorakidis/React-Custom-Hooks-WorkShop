// src/components/Message.js
import React from "react";

export default function Message({ text, sender, sentAt }) {
  return (
    <div>
      <small>
        <strong>{sender}</strong> {sentAt}
      </small>
      <p>{text}</p>
    </div>
  );
}
