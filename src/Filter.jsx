
// Filter.js - Component for filtering todos


import React from 'react';

const Filter = ({ handleFilterChange }) => {
  return (
    <div>
      <label className='filter'>
        Filter By Status:
        <select onChange={(e) => handleFilterChange(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not completed">Not Completed</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
