import React from "react";
import WriteForm from "./WriteForm";

const AddWrite = (props) => {
  console.log("yazi ekle props", props);
  return (
    <div>
      <h1>The Form of Adding Writing</h1>
      <WriteForm />
    </div>
  );
};

export default AddWrite;
