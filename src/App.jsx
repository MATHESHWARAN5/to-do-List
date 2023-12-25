
// App.js - Main component to render the Todo App

import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Filter from './Filter';


const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { ...newTodo, id: Date.now().toString() }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodoStatus = (id, newStatus) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: newStatus };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleFilterChange = (status) => {
    // Filter logic based on status
    // Update a state variable to filter todos accordingly
  };

  return (
    <div>
      <h1 className='Heading'>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <Filter handleFilterChange={handleFilterChange} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodoStatus={updateTodoStatus}
      />
    </div>
  );
};

export default App;

