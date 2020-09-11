import React from "react";
import MaterialTable from "material-table";
import Icon from "./Icon";
const Table = ({ tasks, setSelectedTask, setEditTask,setCreateNewTask }) => {
  const handleClick = task => {
    setSelectedTask(task);
    setEditTask(true);
  };
  return (
    <div>
      {tasks != null && tasks.length > 0 && (
        <MaterialTable
          columns={[
            { title: "Title", field: "Title" },
            { title: "Description", field: "Description" },
            { title: "Status", field: "Status" },
            { title: "AssignedBy", field: "AssignedBy" },
            { title: "DateAssigned", field: "DateAssigned" },
            { title: "DueDate", field: "DueDate" },
            {
              title: "Report",
              field: "Report",
              render: rowData => (
                <Icon
                  icon={
                    rowData.length > 0
                      ? "envelope-open text-success"
                      : "upload text-warning"
                  }
                />
              ),
            },
            {
              title: "reocuring",
              field: "reocuring",
            },
            {
              title: "Priority",
              field: "Priority",
              lookup: { 1: "Low", 2: "Medium", 3: "High" },
            },
            { title: "Id", field: "Id", hidden: true },
          ]}
          actions={[
            {
              icon: "create",
              tooltip: "Update task",
              onClick: (event, rowData) => {
                handleClick(rowData);
              },
            },

            {
              icon: "add-task",
              tooltip: "Add new Task",
              isFreeAction: true,
              onClick: (event, rowData) => {
                setCreateNewTask(true)
              },
            },
          ]}
          data={tasks}
          title='Assigment List '
        />
      )}
    </div>
  );
};

export default Table;
