import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import SearchForm from "./SearchForm";
import {
  getComments as getCommentsService,
  createComment as createCommentService,
  updateComment as updateCommentService,
  deleteComment as deleteCommentService,
} from "./../../Common/Services/CommentService";
import { getUsername } from "./../../Common/Services/MentionService";
import { containsWord } from "./../../Common/Services/SearchService";
import Parse from "parse";

const Comments = () => {

    const [comments, setComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);
    const rootComments = comments.filter(
        (comment) => {
            if (comment.attributes  !== undefined) {
                if (comment.attributes.parentId === null)
                    return comment;
            }
        });
    const [usersForMention, setUsersForMention] = useState([]);
    const [reduxWord, setReduxWord] = useState("");
    const [searchFlag, setSearchFlag] = useState(false);
    const [filteredIds, setFilteredIds] = useState([]);

    var currentUser;
    if (Parse.User.current() !== null) {
        currentUser = Parse.User.current();
    } else {
        currentUser = {id: "0", attributes: {username: "Guest"}};
    }

    const getReplies = (commentId) =>
        comments
        .filter((comment) => {
            if (comment.attributes !== undefined) {
                if (comment.attributes.parentId === commentId) {
                    return comment;
                }
            }
        })
        .sort((a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );

    const addComment = (text, userId, parentId, username) => {
        createCommentService(text, userId, parentId, username).then((comment) => {
        setComments([...comments, comment]);
        setActiveComment(null);
        });
    };

    const updateComment = (commentId, text) => {
        updateCommentService(commentId, text).then((updatedComment) => {
            const updatedComments = comments.map(
                (comment) => {
                    if (comment.id === updatedComment.id) {
                        return updatedComment;
                    }
                    return comment;
                });
            setComments(updatedComments);
            setActiveComment(null);
        });
    };

    const deleteComment = (commentId) => {
        if (window.confirm("Are you sure you want to remove comment?")) {
            deleteCommentService(commentId).then((deletedComment) => {
                const updatedComments = comments.filter(
                (comment) => comment.id !== deletedComment.id
                );
                setComments(updatedComments);
                setActiveComment(null);
            });
        }
    };

    const reduxCommentSearch = (word) => {
        var filteredCommentsIds = [];
        comments
        .filter((comment) =>  {
            if (comment.attributes !== undefined) {
                if (containsWord(comment.attributes.body, word) === true) {
                    filteredCommentsIds.push(comment.id);
                    return comment;
                }
            }
        })
        setFilteredIds(filteredCommentsIds);
        setSearchFlag(false);
    }

    const onClickHandler = (e) => {
        e.preventDefault();
        setSearchFlag(true);
      };
  
    const onChangeHandler = (e) => {
        e.preventDefault();
        setReduxWord(e.target.value);
    };

    useEffect(() => {
        getCommentsService().then((data) => {
            setComments(data);
        });
        getUsername().then((results) => {
            var users = results.map((result) => {
                return {id: result.attributes.username, display: result.attributes.firstName}
            });
            setUsersForMention(users);
        })
        if (searchFlag) {
            reduxCommentSearch(reduxWord);
        }
        if (reduxWord === "") {
            setFilteredIds([]);
        }
    }, [searchFlag, reduxWord]);
    
    return (
        <div className="comments">
            <h3 className="comments-search-title">Search the comment space</h3>
            <SearchForm onSubmitForm={onClickHandler} onChangeForm={onChangeHandler} />
            <br />
            <h3 className="comments-title">Comments</h3>
            <div className="comments-submit-title">Write comment</div>
            <CommentForm submitLabel="Comment" usersForMention={usersForMention} currentUser={currentUser} handleSubmit={addComment} />
            <div className="comments-start-of-list">
                {rootComments.map((rootComment) => (
                    (filteredIds.includes(rootComment.id) || (reduxWord === "")) ? 
                    <Comment
                        comment={rootComment}
                        key={rootComment.id}
                        setActiveComment={setActiveComment}
                        activeComment={activeComment}
                        currentUser={currentUser}
                        filteredIds={filteredIds}
                        reduxWord={reduxWord}
                        updateComment={updateComment}
                        deleteComment={deleteComment}
                        addComment={addComment}
                        parentId={rootComment.id}
                        getReplies={getReplies}
                        replies={getReplies(rootComment.id)}
                        usersForMention={usersForMention}
                    /> : <div></div>
                ))}
            </div>
        </div>
    );
};

export default Comments;