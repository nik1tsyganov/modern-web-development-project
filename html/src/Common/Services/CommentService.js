import Parse from "parse";

export const getComments = () => {
    const comment = Parse.Object.extend("Comment");
    const query = new Parse.Query(comment);
    return query.find().then((results) => {
        return results;
    });
};

export const createComment = (text, userId, parentId, username) => {

    const Comment = Parse.Object.extend("Comment");
    const comment = new Comment();

    comment.set("body", text);
    comment.set("userId", userId);
    comment.set("parentId", parentId);
    comment.set("username", username);

    return comment.save().then((result) => {
        return result;
    });
};
  
export const updateComment = (commentId, text) => {
    
    const Comment = Parse.Object.extend("Comment");
    const comment = new Comment();

    comment.set("objectId", commentId);
    comment.set("body", text);

    return comment.save().then((result) => {
        return result;
    });
  };
  
export const deleteComment = (commentId) => {
    
    const Comment = Parse.Object.extend("Comment");
    const comment = new Comment();

    comment.set("objectId", commentId);
    return comment.destroy().then((result) => {
        return result;
    });
  };