import React from 'react';

const TaskForm = props => {
  return (
    <form className="formField">
      <input
        className="inputField"
        onChange={props.handleChangeTask}
        type="text"
        name="todo"
        value={props.value}
        placeholder="...task"
      />
      <div className="btnContainer">
        <button className="btn" onClick={props.handleAddTask}>
          Add Task
        </button>
        <button className="btn" onClick={props.handleClearCompleted}>
          Clear Completed
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
