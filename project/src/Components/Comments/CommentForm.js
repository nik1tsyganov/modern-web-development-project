import React, { useState } from "react";
import { Mention, MentionsInput } from "react-mentions";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  usersForMention = [],
  handleCancel,
  initialText = "",
}) => {

  // I wasn't able to figure out how to make the form stateless since the text value kept being udpated to a single letter each
  // time as opposed to the whole word or string in the comment
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;

  // This onSubmit function makes sure the correct handle is executed like addComment or updateComment
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>

      {/* This mentions module developed by the 3rd party allows us to implement the @ feature and look up existing usres
      who can be referenced */}
      <MentionsInput
        className="comment-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={"Mention people using @"}
        forceSuggestionsAboveCursor={true}
        a11ySuggestionsListLabel={"Suggested mentions"}
      >
        <Mention 
          data={usersForMention} 
          trigger="@" 
          markup='__display__ [__id__]'
        />
      </MentionsInput>

      {/* The comment button is only visible when there is some text enterred */}
      <button className="comment-button" disabled={isTextareaDisabled}>{submitLabel}</button>

      {/* Cancel is only visible when the user is trying to edit the a comment */}
      {hasCancelButton && (
        <button
          className="comment-button comment-cancel-button"
          onClick={handleCancel}
        >Cancel
        </button>

      )}
    </form>
  );
};

export default CommentForm;