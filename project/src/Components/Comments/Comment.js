import CommentForm from "./CommentForm";
import React from "react";

const Comment = ({
  comment,
  replies,
  getReplies,
  setActiveComment,
  activeComment,
  currentUser,
  filteredIds = [],
  reduxWord = "",
  updateComment,
  deleteComment,
  addComment,
  usersForMention = []
}) => {

  // Checks if the comment or reply is being editted and checks the activeComment type 
  const isEditing = activeComment && activeComment.id === comment.id && activeComment.type === "editing";

  // Checks if the comment can be replied to or is being replied to
  const isReplying = activeComment && activeComment.id === comment.id && activeComment.type === "replying";

  // Following const values are needed to check for deletion, replying, and editting the comments in the list view
  const canDelete = currentUser.id === comment.attributes.userId && replies.length === 0;
  const canReply = Boolean(currentUser.id);
  const canEdit = currentUser.id === comment.attributes.userId;
  const createdAt = new Date(comment.attributes.createdAt).toLocaleDateString();

  return (
    // Each comment has three various actions such as edit, delete, and reply
    // Before doing any of those activities the code checks if the flags are set correctlly 
    // The basic attributes such as username, when created, and body of the comment is always displayed
    <div key={comment.id} className="comment">
      <div className="comment-stretch">
        <div className="comment-content">
          <div className="comment-author">{comment.attributes.username}</div>
          <div className="comment-date">{createdAt}</div>
        </div>

        {!isEditing && 
          <div className="comment-text">{comment.attributes.body}</div>}
        
        {/*  If the comment is being editted it utilizes the updateComment service and uses the comment Form*/}
        {/* Checking the flag is very important here  */}
        {/* Editting has features such as using the cancel button and in addition can leave the initial text
        of the comment. The editted comment is can also use mentions */}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.attributes.body}
            handleSubmit={(text) => updateComment(comment.id, text)}
            handleCancel={() => setActiveComment(null)}
            usersForMention={usersForMention}
          />
        )}
        
        {/* Below are three actions that all set the current active comment unless comment is deleated */}
        <div className="comment-actions">
          {/* Sets the active comment to the current one and thus the state variable */}
          {canReply && (
            <div
              className="comment-reply"
              onClick={() => setActiveComment({ id: comment.id, type: "replying" })}
            >Reply
            </div>
          )}

          {/* Any comment can be editted if it belongs to the current user and it sets the active comment with a certain type */}
          {canEdit && (
            <div
              className="comment-edit"
              onClick={() => setActiveComment({ id: comment.id, type: "editing" })}
            >Edit
            </div>
          )}
          
          {/* A comment can only be delitted if belongs to the current user and it has no replies */}
          {canDelete && (
            <div
              className="comment-delete"
              onClick={() => deleteComment(comment.id)}
            >Delete
            </div>
          )}

        </div>

        {/* Checks if the current comment is being replied to */}
        {/* It than creates a new comment with a parent id that is always equal to the current id of the comment 
        as this allows it to become a parent to the reply comment. The parentId is only needed for replies since
        root comments never have parents == null as parentId*/}
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, currentUser.id, comment.id, currentUser.attributes.username)}
            usersForMention={usersForMention}
          />
        )}

        {/* Iterates over all the replies that were obtained from each rootComment and displays them and so on */}
        {/* Despite filtering not working on root comments but when a word being searched matches the rootComment it won't display
        all the replies and will just isolate the root on its own and the replies that have the same word in its body */}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              (filteredIds.includes(reply.id) || (reduxWord === "")) ? 
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                currentUser={currentUser}
                filteredIds={filteredIds}
                reduxWord={reduxWord}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                getReplies={getReplies}
                replies={getReplies(reply.id)}
                usersForMention={usersForMention}
              />
              : <></>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;