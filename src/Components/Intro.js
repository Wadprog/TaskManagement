import React from "react";
import { Button, Form, Col, Alert } from "react-bootstrap";
import Cards from "./Card";
const Intro = ({ setCreateNewUser, setCreateNewTask, tasks }) => {
  return (
    <>
      <Cards tasks={tasks} />
      <div className='d-flex justify-content-end my-4'>
        <div className='d-flex justify-content-center'>
          <Button
            onClick={() => setCreateNewTask(true)}
            variant='outline-primary'
          >
            <i className='fa fa-plus '></i> <i className='fa fa-folder'></i>
          </Button>
          <Button
            onClick={() => setCreateNewUser(true)}
            className='ml-2 '
            variant='outline-secondary'
          >
            <i className='fa fa-plus '></i> <i className='fa fa-user'></i>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Intro;
