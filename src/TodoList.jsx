// TodoList.js - Component to display all todos

import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, updateTodoStatus }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodoStatus={updateTodoStatus}
        />
      ))}
    </div>
  );
};

export default TodoList;
