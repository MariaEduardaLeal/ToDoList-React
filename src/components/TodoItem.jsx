// TodoItem.js
import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <div className='bg-white p-4 border border-gray-200 rounded-md shadow-md flex items-center'>
      <div className='flex-1'>
        <p className='text-gray-800 text-lg font-semibold'>{todo.text}</p>
        <p className='text-sm text-gray-500'>{todo.category}</p>
      </div>
      <div className='ml-4'>
        <input
          type='checkbox'
          checked={todo.isCompleted}
          className='form-checkbox h-5 w-5 text-blue-600'
        />
      </div>
    </div>
  );
};

export default TodoItem;
