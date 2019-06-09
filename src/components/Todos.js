import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={ todo.id } todo={todo} markComplete = {this.props.markComplete} delTodo={ this.props.delTodo} />
    ));
  }   
}

// define propTypes for this class 
Todos.PropTyoes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deltodos: PropTypes.func.isRequired
}

export default Todos;
