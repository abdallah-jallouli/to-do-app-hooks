import React from "react";
import TaskCard from "./TaskCard";

const TasksList = ({
  tasks,
  handleDelete,
  handleEdit,
  handleComplete,
  isFiltered,
}) => {
  // console.log(isFiltered)
  return (
    <div>
      {isFiltered
        ? React.Children.toArray(
            tasks
              .filter((el) => el.isDone === false)
              .map((task) => (
                <TaskCard
                  task={task}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  handleComplete={handleComplete}
                />
              ))
          )
        : React.Children.toArray(
            tasks.map((task) => (
              <TaskCard
                task={task}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleComplete={handleComplete}
              />
            ))
          )}
    </div>
  );
};

export default TasksList;
