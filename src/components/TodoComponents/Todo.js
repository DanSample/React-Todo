import React from 'react';

const Task = props => {
  return (
    <div
      style={props.todo.completed ? { textDecoration: 'line-through' } : null}
      onClick={() => props.handleToggleCompleted(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};
export default Task;
