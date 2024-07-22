// TodoItem.js
import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <div className='todo'>
      <div className='content'>
        <p>{todo.text}</p>
      </div>
    </div>
  );
};

export default TodoItem;
