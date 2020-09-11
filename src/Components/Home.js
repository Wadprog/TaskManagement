import React, { useEffect, useState } from "react";
import requests from "../helpers/requests";
import { Spinner } from "react-bootstrap";
//Custom imports
import TaskList from "./TaskList";

import MaterialTable from "./MaterialTable";

import Intro from "./Intro";
import Alerts from "./Alerts";
import NewUser from "./NewUser";
import NewTask from "./NewTask";
import EditTask from "./EditTask";

const MacroSelector = props => {
  const [tasks, setTask] = useState([]);
  const [alerts, setAlert] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [createNewUser, setCreateNewUser] = useState(false);
  const [createNewTask, setCreateNewTask] = useState(false);

  const [selectedTask, setSelectedTask] = useState({});
  const [editTask, setEditTask] = useState(false);

  const addAlert = alert => {
    let newAlert = {
      msg: alert.msg,
      type: alert.type,
    };
    setAlert([newAlert, ...alerts]);
  };
  useEffect(() => {
    const init = () => {
      requests.getAllTask(
        data => {
          setTask(data);
          if (isloading) setIsloading(false);
        },
        error => {
          addAlert(error);
          if (isloading) setIsloading(false);
        }
      );
    };
    init();

    return () => {
      console.log("done fo no");
    };
  }, []);

  return (
    <>
      <div className='container py-3'>
        {isloading ? (
          <Spinner animation='border' role='status'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        ) : (
          <>
            <Intro
              setCreateNewUser={setCreateNewUser}
              setCreateNewTask={setCreateNewTask}
              tasks={tasks}
            />
            {/* {  <TaskList
          tasks={tasks}
          setSelectedTask={setSelectedTask}
          setEditTask={setEditTask}
        />} */}

            <MaterialTable
              tasks={tasks}
              setSelectedTask={setSelectedTask}
              setEditTask={setEditTask}
              setCreateNewTask={setCreateNewTask}
            />
          </>
        )}
      </div>

      <NewUser
        show={createNewUser}
        handleClose={() => setCreateNewUser(false)}
      />
      <NewTask
        show={createNewTask}
        handleClose={() => setCreateNewTask(false)}
        setError={addAlert}
      />
      <EditTask
        show={editTask}
        handleClose={() => setEditTask(false)}
        task={selectedTask}
        setError={addAlert}
      />
    </>
  );
};

export default MacroSelector;
