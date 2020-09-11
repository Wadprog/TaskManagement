import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import TaskForm from "./TaskForm";
import request from "../helpers/requests";
const NewTask = ({ show, handleClose, setError }) => {
  const handleSubmit = () => {
    request.addNewTask(
      formData,
      data => {
        window.location.reload();
      },
      setError
    );
  };
  const [formData, SetFormData] = useState({
    DateAssigned: "",
    Title: "",
    Description: "",
    Status: "Open",
    AssignedTo: "",
    AssignedBy: "ccyrius@theoasisfirm.com",
    DueDate: "",
    Report: "",
    reocuring: "",
    Priority: "1",
  });

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Creating new task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{formData.Title}</h4>
        <h4>{formData.Status}</h4>
        <TaskForm formData={formData} SetFormData={SetFormData} />
      </Modal.Body>
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

export default NewTask;
