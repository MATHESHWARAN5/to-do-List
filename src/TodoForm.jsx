// TodoForm.js - Component for adding todos

import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    addTodo({ taskName, description, status: 'not completed' });
    setTaskName('');
    setDescription('');
  };

  return (
    
    <div className="todo-wrapper">
     
    <form onSubmit={handleSubmit}>
      
    <div className="todo-input">
    <div className="todo-input-item">
      <input 
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      </div>

      <div className="todo-input-item">

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      </div>

      <div className="todo-input-item">
      <button className='add' type="submit">
        <span>
        Add Todo</span></button>
        </div>
        </div>
    </form>
    </div>
  );
};

export default TodoForm;
