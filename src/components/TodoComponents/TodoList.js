import React from 'react';

import Task from './Todo';

const TaskList = props => {
  return (
    <div>
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
