import React, { useEffect, useState } from "react";
import api from "./Api";
import { Link } from "react-router-dom";

const List = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    api()
      .get("/posts")
      .then((response) => {
        console.log(response.data);
        setList(response.data);
      });
  }, []);

  return (
    <div className="ui relaxed divided list">
      <Link to="/addWrite" className="ui primary button">
        Add Writing
      </Link>
      {list.map((write) => {
        return (
          <div className="item" key={write.id}>
            <i className="large github middle aligned icon"></i>
            <div className="content">
              <Link to={`/posts/${write.id}`} className="header">
                {write.title}
              </Link>
              <div className="description">{write.created_at}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
