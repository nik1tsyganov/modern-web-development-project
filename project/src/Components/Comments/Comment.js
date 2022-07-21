import CommentForm from "./CommentForm";
import React from "react";

const Comment = ({
  comment,
  replies,
  getReplies,
  setActiveComment,
  activeComment,
  currentUser,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId
}) => {

  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";

  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";

  const canDelete = currentUserId === comment.attributes.userId && replies.length === 0;

  const canReply = Boolean(currentUserId);

  const canEdit = currentUserId === comment.attributes.userId;

  const replyId = parentId ? parentId : comment.id;

  const createdAt = new Date(comment.attributes.createdAt).toLocaleDateString();

  return (
    <div key={comment.id} className="comment">
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.attributes.username}</div>
          <div>{createdAt}</div>
        </div>

        {!isEditing && <div className="comment-text">{comment.attributes.body}</div>}
        
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.attributes.body}
            handleSubmit={(text) => updateComment(comment.id, text)}
            handleCancel={() => {
              setActiveComment(null);
            }}
            currentUser={currentUser}
          />
        )}
        <div className="comment-actions">
          {canReply && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "editing" })
              }
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment.id)}
            >
              Delete
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => {addComment(text, currentUser.id, replyId, currentUser.attributes.username)}}
            currentUser={currentUser}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                currentUser={currentUser}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={reply.id}
                getReplies={getReplies}
                replies={getReplies(reply.id)}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;