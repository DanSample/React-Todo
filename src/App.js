import React from 'react';
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
    let tasks = this.state.todos.filter(todo => todo.completed === true);

    this.setState({ tasks });
  };

  render() {
    return (
      <div>
        <TaskList
          handleToggleCompleted={this.toggleCompleted}
          todos={this.state.todos}
        />
        <TaskForm
          value={this.state.todo}
          handleAddTask={this.addTask}
          handleClearCompleted={this.clearCompleted}
          handleChangeTask={this.changeTask}
        />
      </div>
    );
  }
}

export default App;
