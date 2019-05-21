import React from 'react';

const Task = props => {
  return (
    <div
      className="taskItem"
      style={props.todo.completed ? { backgroundColor: '#cc0044' } : null}
      onClick={() => props.handleToggleCompleted(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};
export default Task;
