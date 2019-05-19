import React from 'react';

import Task from './Todo';

const TaskList = props => {
  return (
    <div className="taskList">
      {props.todos.map(todo => (
        <Task
          handleToggleCompleted={props.handleToggleCompleted}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TaskList;
