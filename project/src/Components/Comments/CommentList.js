import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {
  getComments as getCommentsService,
  createComment as createCommentService,
  updateComment as updateCommentService,
  deleteComment as deleteCommentService,
} from "./../../Common/Services/CommentService";
import Parse from "parse";

const Comments = () => {

    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);
    const rootComments = backendComments.filter(
        (backendComment) => {
            if (backendComment.attributes  !== undefined) {
                if (backendComment.attributes.parentId === null)
                    return backendComment;
            }
        });

    var currentUser;
    if (Parse.User.current() !== null) {
        currentUser = Parse.User.current();
    } else {
        currentUser = {id: "0", attributes: {username: "Guest"}};
    }

    const getReplies = (commentId) =>
        backendComments
        .filter((backendComment) =>  {
            if (backendComment.attributes !== undefined) {
                if (backendComment.attributes.parentId === commentId) {
                    return backendComment;
                }
            }
        })
        .sort(
            (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );

    const addComment = (text, userId, parentId, username) => {
        createCommentService(text, userId, parentId, username).then((comment) => {
        setBackendComments([comment, ...backendComments]);
        setActiveComment(null);
        });
    };

    const updateComment = (commentId, text) => {
        updateCommentService(commentId, text).then((comment) => {
            const updatedBackendComments = backendComments.filter(
                (backendComment) => backendComment.id !== comment.id
            );
            setBackendComments([comment, ...updatedBackendComments]);
            setActiveComment(null);
        });
    };

    const deleteComment = (commentId) => {
        if (window.confirm("Are you sure you want to remove comment?")) {
            deleteCommentService(commentId).then((result) => {
                const updatedBackendComments = backendComments.filter(
                (backendComment) => backendComment.id !== result.id
                );
                setBackendComments(updatedBackendComments);
                setActiveComment(null);
            });
        }
    };

    useEffect(() => {
        getCommentsService().then((data) => {
            setBackendComments(data);
        });
    }, []);

    return (
        <div className="comments">
            <h3 className="comments-title">Comments</h3>
            <div className="comment-form-title">Write comment</div>
            <CommentForm submitLabel="Write" currentUser={currentUser} handleSubmit={addComment} />
            <div className="comments-container">
                {rootComments.map((rootComment) => (
                <Comment
                    key={rootComment.id}
                    comment={rootComment}
                    replies={getReplies(rootComment.id)}
                    getReplies={getReplies}
                    activeComment={activeComment}
                    currentUser={currentUser}
                    setActiveComment={setActiveComment}
                    addComment={addComment}
                    deleteComment={deleteComment}
                    updateComment={updateComment}
                    currentUserId={currentUser.id}
                />
                ))}
            </div>
        </div>
    );
};

export default Comments;