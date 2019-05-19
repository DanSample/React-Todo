import React from 'react';
import './components/TodoComponents/Todo.css';
import TaskList from './components/TodoComponents/TodoList';
import TaskForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: '' //clears the input field on re-render.
    };
  }

  addTask = e => {
    e.preventDefault(); //This will prevent the re-rendering of the entire page and will only re-render the component.
    const newTask = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState({
      todos: [...this.state.todos, newTask],
      todo: ''
    });
  };

  changeTask = e => this.setState({ [e.target.name]: e.target.value });

  toggleCompleted = id => {
    let tasks = this.state.todos.slice();
    tasks = tasks.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ tasks });
  };

  clearCompleted = e => {
    e.preventDefault();
    let tasks = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos: tasks });
  };

  render() {
    return (
      <div className="container">
        <div className="formContainer">
          <h1>Task List</h1>
          <TaskForm
            value={this.state.todo}
            handleChangeTask={this.changeTask}
            handleAddTask={this.addTask}
            handleClearCompleted={this.clearCompleted}
          />
        </div>
        <div className="taskContainer">
          <TaskList
            handleToggleCompleted={this.toggleCompleted}
            todos={this.state.todos}
          />
        </div>
      </div>
    );
  }
}

export default App;
