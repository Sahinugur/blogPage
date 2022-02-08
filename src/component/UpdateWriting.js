import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import api from "./Api";
import WriteForm from "./WriteForm";

const UpdateWriting = (props) => {
  const [writing, setWriting] = useState({});
  const { id } = props.match.params;

  console.log("yazi formu props", props);

  useEffect(() => {
    api()
      .get(`/posts/${id}`)
      .then((response) => {
        setWriting({
          title: response.data.title,
          content: response.data.content,
        });
      });
  }, []);

  return (
    <div>
      <h1>Update Writing</h1>
      <WriteForm writing={writing} />
    </div>
  );
};

export default UpdateWriting;
