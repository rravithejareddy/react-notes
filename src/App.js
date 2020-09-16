import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Todos from './components/Todos';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:3000/todos')
      .then(response => this.setState({ todos: response.data }));
  }

  // Toggle Completed Todo
  markComplete = (id) => {
  
  
        this.updateTodo(id);
      
  
    // this.isCompleted = !this.isCompleted
  };

  // Delete Completed Todos
  delTodo = id => {
    axios
      .delete('http://localhost:3000/todos/delete'+id)
      .then(response =>
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
      );
  };

  // Add New Todo
  addTodo = title => {
    axios
      .post('http://localhost:3000/todos', {
        text: title
      })
      .then(response =>
        this.setState({ todos: [...this.state.todos, response.data] })
      );
  };

  updateTodo = id => {
    var todo = this.state.todos.find(x => x.id == id);
    axios
      .put('http://localhost:3000/todos/update/'+id, {
        text : todo.text,
        checked: !todo.checked
      })
      .then(response =>{
        const elementsIndex = this.state.todos.findIndex(element => element.id == response.data.id );
        let updatedTodos = [...this.state.todos];

        updatedTodos[elementsIndex] = {...response.data}

        this.setState({ todos:updatedTodos })
      });
  };

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <div className="container">
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </div>
              </React.Fragment>
            )}
          />
          <Route
            path="/About"
            render={props => (
              <React.Fragment>
                <div className="container">
                  <About />
                </div>
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
