import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgound: '#333',
      padding: '10px',
      borderBottom: '1px solid #ccc',
      // opacity: 0.7,
      textDecoration: this.props.todo.checked ? 'line-through' : 'none'
    };
  };

  render() {
    const { id, text, checked } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox" checked={checked}
            onChange={this.props.markComplete.bind(this, id)}
            style={{ marginRight: '5px' }}
          />
          {text}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            X
          </button>
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todos: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired
};

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
};

export default TodoItem;
