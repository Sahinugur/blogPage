import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const WriteComments = (props) => {
  return (
    <>
      <CommentList comments={props.comments} />
      <CommentForm handleSubmit={props.handleSubmit} />
    </>
  );
};

export default WriteComments;
