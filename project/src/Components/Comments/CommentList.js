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

    // The following state variables keep track of global and root comments in addition to words used in search / filtering
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

    // We are getting the current user and if he/she isn't logged in we set it to defeault
    var currentUser;
    if (Parse.User.current() !== null) {
        currentUser = Parse.User.current();
    } else {
        currentUser = {id: "0", attributes: {username: "Guest"}};
    }

    // Function allows to get replies to the so called root comment and sort them by created date and time
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

    // Function allows to add comments at the end of the state variable comments and uses the comments services
    // the last comment which was just created is added at the end 
    const addComment = (text, userId, parentId, username) => {
        createCommentService(text, userId, parentId, username).then((comment) => {
        setComments([...comments, comment]);
        setActiveComment(null);
        });
    };

    // The editted comment is updated in place using the desired id of the object and new text
    // the comment object is changed in place so the order isn't messed up when rendered on the main page
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

    // Here we destroy the comment object and update the state array of comments to ommit the deleted one
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

    // This is technically not redux but when initially coded we used the redux library
    // the word the user is looking for is compared to the body of each comment and the ones matching are displayed
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
        // We update the Ids array as a state variable for each new search 
        setFilteredIds(filteredCommentsIds);
        setSearchFlag(false);
    }

    // Handles the click of the submit button on the search form and sets the flag 
    const onClickHandler = (e) => {
        e.preventDefault();
        setSearchFlag(true);
      };
  
    // This changes the search word and sets its state variable
    const onChangeHandler = (e) => {
        e.preventDefault();
        setReduxWord(e.target.value);
    };

    // Updates the comments array of objects to display the correct list of comments
    useEffect(() => {
        getCommentsService().then((data) => {
            setComments(data);
        });
        // Gets all the required user data for the mentions object creation with "id" and "display"
        getUsername().then((results) => {
            var users = results.map((result) => {
                return {id: result.attributes.username, display: result.attributes.firstName}
            });
            setUsersForMention(users);
        })
        // Checks if the search flag is true to start comment filtering
        if (searchFlag) {
            reduxCommentSearch(reduxWord);
        }
        // If the word is "" it will reset the Ids and display all comments
        if (reduxWord === "") {
            setFilteredIds([]);
        }
    }, [searchFlag, reduxWord]);
    
    return (
        <div className="comments">
            {/* The Search Form */}
            <h3 className="comments-search-title">Search the comment space</h3>
            <SearchForm onSubmitForm={onClickHandler} onChangeForm={onChangeHandler} />
            <br />
            {/* Comment form is created to set the comments and get the textarea value including the mentions */}
            <h3 className="comments-title">Comments</h3>
            <div className="comments-submit-title">Write comment</div>
            <CommentForm 
                submitLabel="Comment" 
                usersForMention={usersForMention} 
                currentUser={currentUser} 
                handleSubmit={(text) => addComment(text, currentUser.id, null, currentUser.attributes.username)} 
            />
            <div className="comments-start-of-list">
                {/* The root comments are filtered and displayed depending on which Ids were selected by the search function */}
                {/* Else nothing is displayed or everything is if the search word is empty */}
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