import React from 'react';

const TaskForm = props => {
  return (
    <form>
      <input
        onChange={props.handleChangeTask}
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

export default TaskForm;
