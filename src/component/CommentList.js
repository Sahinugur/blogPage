import React from "react";

const CommentList = (props) => {
  return (
    <>
      <h3>Comments</h3>
      {props.comments.map((comment) => {
        return (
          <div className="ui relaxed list" key={comment.id}>
            <div className="item">
              <div className="content">
                <span className="header">{comment.display_name}</span>
                <div className="description">{comment.body}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CommentList;
