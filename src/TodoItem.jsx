
// TodoItem.js - Component to display individual todo item

import React, { useState } from 'react';

const TodoItem = ({ todo, deleteTodo, updateTodoStatus }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTaskName, setUpdatedTaskName] = useState(todo.taskName);
  const [updatedDescription, setUpdatedDescription] = useState(todo.description);

  const handleStatusChange = () => {
    const newStatus = todo.status === 'completed' ? 'not completed' : 'completed';
    updateTodoStatus(todo.id, newStatus);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Perform update here with updatedTaskName and updatedDescription
    // For simplicity, assume an update function is passed as a prop
    // updateFunction(todo.id, updatedTaskName, updatedDescription);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTaskName}
            onChange={(e) => setUpdatedTaskName(e.target.value)}
          />
          <input
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className='card'>
           
          <h3>{todo.taskName}</h3>
          <p>{todo.description}</p>
          <p>Status: <p className='not'>{todo.status}</p></p>
          <button className='change' onClick={handleStatusChange}>Change Status</button>
          <button className='edit-button' onClick={handleEdit}>Edit</button>
          <button className='Delete' onClick={() => deleteTodo(todo.id)}>Delete</button>
          
        </div>
      )}
    </div>
  );
};

export default TodoItem;
