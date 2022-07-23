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

    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);
    const rootComments = backendComments.filter(
        (backendComment) => {
            if (backendComment.attributes  !== undefined) {
                if (backendComment.attributes.parentId === null)
                    return backendComment;
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
        backendComments
        .filter((backendComment) =>  {
            if (backendComment.attributes !== undefined) {
                if (backendComment.attributes.parentId === commentId) {
                    return backendComment;
                }
            }
        })
        .sort((a, b) =>
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

    const reduxCommentSearch = (word) => {
        var filteredCommentsIds = [];
        backendComments
        .filter((backendComment) =>  {
            if (backendComment.attributes !== undefined) {
                if (containsWord(backendComment.attributes.body, word) === true) {
                    filteredCommentsIds.push(backendComment.id);
                    return backendComment;
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
            setBackendComments(data);
        });
        getUsername().then((results) => {
            var users = [];
            for (let i = 0; i < results.length; i++) {
                var dict = {};
                dict["id"] = results[i].attributes.username;
                dict["display"] = results[i].attributes.firstName;
                users.push(dict);
            }
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
            <h3 className="comments-space-title">Search the comment space</h3>
            <SearchForm onSubmitForm={onClickHandler} onChangeForm={onChangeHandler} />
            <br />
            <h3 className="comments-title">Comments</h3>
            <div className="comment-form-title">Write comment</div>
            <CommentForm submitLabel="Write" usersForMention={usersForMention} currentUser={currentUser} handleSubmit={addComment} />
            <div className="comments-container">
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
                        currentUserId={currentUser.id}
                    /> : <div></div>
                ))}
            </div>
        </div>
    );
};

export default Comments;