import React from "react";
import { Form } from "react-bootstrap";

const TaskForm = ({ formData, SetFormData }) => {
  return (
    <Form>
      <Form.Row>
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={formData.Title}
          onChange={({ target: { value } }) => {
            SetFormData({ ...formData, Title: value });
          }}
        ></Form.Control>
      </Form.Row>

      <Form.Row>
        <Form.Label>AssignedTo</Form.Label>
        <Form.Control
          value={formData.AssignedTo}
          onChange={({ target: { value } }) => {
            SetFormData({
              ...formData,
              AssignedTo: value,
            });
          }}
        ></Form.Control>
      </Form.Row>
      <Form.Row>
        <Form.Label>Date Due</Form.Label>
        <small>{new Date(formData.DueDate).toLocaleDateString("en-US")}</small>
        <Form.Control
          type='date'
          value={formData.DueDate}
          onChange={({ target: { value } }) => {
            SetFormData({
              ...formData,
              DueDate: value,
            });
          }}
        ></Form.Control>
      </Form.Row>
      <Form.Row>
        <Form.Label>Report</Form.Label>
        <Form.Control
          placeholder={"Report"}
          value={formData.Report}
          onChange={({ target: { value } }) => {
            SetFormData({ ...formData, Report: value });
          }}
        ></Form.Control>
      </Form.Row>
      <Form.Row>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as='textarea'
          rows='3'
          value={formData.Description}
          onChange={({ target: { value } }) => {
            SetFormData({ ...formData, Description: value });
          }}
        />
      </Form.Row>
      <small>{formData.Description.length} out of 167</small>
      <Form.Row>
        <Form.Label>Priority</Form.Label>
        <Form.Control
          as='select'
          placeholder={"Priority"}
          value={formData.Priority}
          onChange={({ target: { value } }) => {
            SetFormData({ ...formData, Priority: value });
          }}
        >
          <option value='3'>3</option>
          <option value='2'>2</option>
          <option value='1'>1</option>
        </Form.Control>
      </Form.Row>

      <Form.Row>
        <Form.Check
          type='checkbox'
          checked={formData.reocuring}
          label='Reocurring'
          onChange={({ target: { checked } }) => {
            SetFormData({ ...formData, reocuring: checked });
          }}
        />
      </Form.Row>
    </Form>
  );
};

export default TaskForm;
