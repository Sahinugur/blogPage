import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "./Api";
import WriteComments from "./WriteComments";
import { Link, useParams, useHistory } from "react-router-dom";
import DeleteModal from "./DeleteModal";

const Detail = () => {
  /* const { id } = props.match.params; */
  const { id } = useParams();
  const [writeDetail, setWriteDetail] = useState({});
  const [comments, setComments] = useState([]);

  const history = useHistory();
  const handleCommentSubmit = (event, yorum) => {
    event.preventDefault();
    api()
      .post(`/posts/${id}/comments`, yorum)
      .then((response) => {
        setComments([...comments, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    /*    axios
      .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
      .then((res) => {
        setWriteDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`)
      .then((response) => {
        setComments(response.data);
      }); */

    axios
      .all([api().get(`/posts/${id}`), api().get(`/posts/${id}/comments`)])
      .then((response) => {
        setWriteDetail(response[0].data);
        setComments(response[1].data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h2 className="ui header">{writeDetail.title}</h2>
      <p>{writeDetail.created_at}</p>
      <div className="ui buttons">
        <Link className="ui blue button" to={`/posts/${writeDetail.id}/edit`}>
          Update
        </Link>
        {/*  <button className="ui red button">Delete</button> */}
        <DeleteModal writing={writeDetail} push={history.push} />
      </div>
      <p>{writeDetail.content}</p>
      <WriteComments comments={comments} handleSubmit={handleCommentSubmit} />
    </>
  );
};

export default Detail;
