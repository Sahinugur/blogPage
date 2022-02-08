import React, { useState } from "react";

const YORUM_BASLANGIC = {
  display_name: "",
  body: "",
};

const CommentForm = (props) => {
  const [yorum, setYorum] = useState(YORUM_BASLANGIC);

  const handleOnChange = (event) => {
    setYorum({ ...yorum, [event.target.name]: event.target.value });
  };

  return (
    <React.Fragment>
      <h3>Write Comment</h3>
      <form
        className="ui form"
        onSubmit={(event) => {
          props.handleSubmit(event, yorum);
          setYorum(YORUM_BASLANGIC);
        }}
      >
        <div className="ui mini icon input">
          <input
            name="display_name"
            type="text"
            placeholder="Your Name"
            onChange={handleOnChange}
            value={yorum.display_name}
          />
        </div>
        <textarea
          name="body"
          placeholder="Your Comment"
          rows="3"
          onChange={handleOnChange}
          value={yorum.body}
        ></textarea>
        <button className="ui blue button" type="submit">
          Send Comment
        </button>
      </form>
    </React.Fragment>
  );
};

export default CommentForm;
