import React from "react";
import { Table, Button } from "react-bootstrap";
const TaskList = ({ tasks, setSelectedTask, setEditTask }) => {
  const handleClick = task => {
    setSelectedTask(task);
    setEditTask(true);
  };

  return (
    <div className='Row'>
      <div className='col-12 mb-2'>
        {tasks != null && tasks.length > 0 && (
          <Table>
            <thead>
              <tr>
                <th>Date Assigned </th>
                <th>Title </th>
                <th>Description</th>
                <th>Status</th>
                <th>Assigned To</th>
                <th>Assigned By</th>
                <th>Due Date</th>
                <th>Report </th>
                <th>Reacurring</th>
                <th>Priority</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task.Id}>
                  <td>
                    {new Date(task.DateAssigned).toLocaleDateString("en-US")}
                  </td>
                  <td>{task.Title}</td>
                  <td>{task.Description}</td>
                  <td>
                    <i
                      className={`fa fa-${
                        task.Status.includes("Open")
                          ? "folder-open text-warning"
                          : "folder text-success"
                      }`}
                    ></i>
                  </td>
                  <td>{task.AssignedTo}</td>
                  <td>{task.AssignedBy}</td>
                  <td>{new Date(task.DueDate).toLocaleDateString("en-US")}</td>
                  <td>
                    {task.Report ? (
                      <i className='fa fa-envelope-open text-success'></i>
                    ) : (
                      <i className='fa fa-upload text-warning'></i>
                    )}
                  </td>
                  <td>
                    <i
                      className={`fa fa-${
                        task.reocuring
                          ? "check text-success"
                          : "times text-danger"
                      }`}
                    ></i>
                  </td>
                  <td>{task.Priority}</td>
                  <td className='d-flex justify-content-center'>
                    <a
                      variant='outline-primary'
                      onClick={() => handleClick(task)}
                      className='text-warning'
                    >
                      <i className='fa fa-pencil mx-2'></i>
                    </a>
                    <a
                      disabled
                      variant='outline-secondary'
                      className='text-danger'
                    >
                      <i className='fa fa-times mx-2'></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default TaskList;
