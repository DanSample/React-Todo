import React from 'react';

import Task from './Todo';

const TaskList = props => {
  return (
    <form>
      <input
        onChange={props.handleTaskChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="...task"
      />
      <button onClick={props.handleAddTask}>Add Task</button>
      <button onClick={props.handleClearCompleted}>Clear Completed</button>
    </form>
  );
};

export default TaskList;
