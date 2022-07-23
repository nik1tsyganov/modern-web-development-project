import React, { useState } from "react";
import { Mention, MentionsInput } from "react-mentions";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  currentUser,
  replyIdPass = null,
  usersForMention = [],
  handleCancel,
  initialText = "",
}) => {

  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text, currentUser.id, replyIdPass, currentUser.attributes.username);
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>

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

      <button className="comment-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>

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