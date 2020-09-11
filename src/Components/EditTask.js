import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import TaskForm from "./TaskForm";
import request from "../helpers/requests";
const EditTask = ({ show, handleClose, task, setError }) => {
  const [formData, SetFormData] = useState({ ...task });
  useEffect(() => {
    if (show) {
      SetFormData({ ...task });
    }
  }, [show]);

  const handleSubmit = () => {
    request.editTask(
      formData,
      data => {
        window.reload();
      },
      setError
    );
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Updating task </Modal.Title>
      </Modal.Header>
      {formData.Title && (
        <Modal.Body>
          <h4>{formData.Title}</h4>
          <h4>{formData.Status}</h4>
          <TaskForm formData={formData} SetFormData={SetFormData} />
        </Modal.Body>
      )}
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTask;
