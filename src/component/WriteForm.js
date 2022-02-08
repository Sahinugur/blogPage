import api from "./Api";
import React, { useState, useEffect } from "react";
import { useHistory, useParams, withRouter } from "react-router";

const WriteForm = (props) => {
  const [writing, setWriting] = useState({
    title: "",
    content: "",
  });
  const [err, setErr] = useState("");

  const { id } = useParams();
  const history = useHistory();

  const onInputChange = (e) => {
    setWriting({ ...writing, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    setErr("");

    if (props.writing?.title) {
      api()
        .put(`/posts/${props.match.params.id}`, writing)
        .then((response) => {
          console.log(response);
          history.push(`/posts/${id}`);
        });
    } else {
      api()
        .post("/posts", writing)
        .then((response) => {
          history.push("/");
        })
        .catch((error) => {
          setErr("Title and content is required");
        });
    }
  };

  useEffect(() => {
    if (props.writing?.title && props.writing.content)
      setWriting(props.writing);
  }, [props.writing]);

  return (
    <>
      {err && (
        <div className="ui error message">
          <div className="header">Action Forbidden</div>
          <p>{err}</p>
        </div>
      )}

      <div className="ui form">
        <div className="field">
          <label>Writing Heading</label>

          <input
            type="text"
            value={writing.title}
            name="title"
            onChange={onInputChange}
          />
        </div>

        <div className="field">
          <label>Your text here</label>
          <textarea
            rows="3"
            value={writing.content}
            name="content"
            onChange={onInputChange}
          ></textarea>
        </div>

        <button className="ui primary button" onClick={onSubmitForm}>
          Send
        </button>
        <button className="ui button" onClick={onSubmitForm}>
          Discard
        </button>
      </div>
    </>
  );
};

export default withRouter(WriteForm);
