// TodoItem.js
import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <div className='bg-white p-4 border border-gray-200 rounded-md shadow-md flex items-center'>
      <div className='flex-1'>
        <p className='text-gray-800 text-lg font-semibold'>{todo.text}</p>
        <p className='text-sm text-gray-500'>{todo.category}</p>
      </div>
      <div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Completar</button>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded ml-2">X</button>
      </div>
    </div>
  );
};

export default TodoItem;
