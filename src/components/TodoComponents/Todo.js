import React from 'react';

const Task = props => {
  return (
    <div
      className="taskItem"
      style={props.todo.completed ? { backgroundColor: 'pink' } : null}
      onClick={() => props.handleToggleCompleted(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};
export default Task;
