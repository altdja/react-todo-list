import React, { Component } from 'react';
import './App.css';

class Todo extends Component {
  render() {
    return (
      <div className="todo">
        <p>{this.props.value}</p>
        <p className="delete" onClick={() => this.props.onDelete(this.props.id)}>Delete</p>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      todos: []
    };

    this.addTodo = this.addTodo.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  
  addTodo() {
    this.setState({
      input: '',
      todos: this.state.todos.concat(this.state.input)
    })
  }

  onDelete(id) {
    const todos = this.state.todos.filter((v, index) => index !== id);
    this.setState({ todos: todos })
  }

  onChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div>
        <h2>React TODO list:</h2>

        <div>
          {this.state.todos.map((todo, index) =>
            <Todo key={index} id={index} value={todo} onDelete={index => this.onDelete(index)}/>
          )}
        </div>

        <div className="add-todo">
          <p className="header">Add TODO:</p>
          <div className="flex">
            <input value={this.state.input} onChange={this.onChange} type="text" />
            <button className="button" onClick={this.addTodo}>Add!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
