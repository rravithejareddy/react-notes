import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  state = {
    title: ''
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={formStyle}>
        <input
          type="text"
          name="title"
          placeholder="Add New Todo..."
          value={this.state.title}
          onChange={this.onChange}
          style={{
            flex: '10',
            borderRadius: '5px 0 0 5px',
            padding: '5px 8px',
            lineHeight: '1rem',
            fontSize: '1.1rem',
            border: '1px solid #888'
          }}
        />

        <input
          type="submit"
          name="Add Todo"
          className="btn"
          style={{
            flex: '2',
            borderRadius: '0 5px 5px 0',
            textTransform: 'uppercase',
            backgroundColor: '#609'
          }}
        />
      </form>
    );
  }
}

const formStyle = {
  display: 'flex',
  boxShadow: '0px 0px 3px #111'
};

// PropTypes
AddTodo.propTypes = {
  AddTodo: PropTypes.func.isRequired
};

export default AddTodo;
