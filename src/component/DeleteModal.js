import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import api from "./Api";

const DeleteModal = ({ writing, push }) => {
  const [open, setOpen] = useState(false);
  const [err, setErr] = useState("");

  const showModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    api()
      .delete(`/posts/${id}`)
      .then(() => {
        setErr("");
        //modal close
        closeModal();
        //push to home (history.push ile)
        push(`/`);
      })
      .catch(() => {
        setErr("an error occur");
      });
  };
  return (
    <>
      <Button color="red" onClick={showModal}>
        Delete
      </Button>
      <Modal size="mini" open={open} onClose={closeModal}>
        <Modal.Header>Delete Writing</Modal.Header>
        <Modal.Content>
          <p>
            Are you sure about delete <b>{writing.title}</b>?
          </p>
          {err && <p>{err} </p>}
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={closeModal}>
            Cancel
          </Button>
          <Button
            positive
            icon="delete"
            content="Yes, delete it"
            labelPosition="right"
            onClick={() => handleDelete(writing.id)}
          />
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default DeleteModal;
