// App.jsx
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Fazer almoço",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Organizar agenda de reuniões",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Fazer mapa mental sobre react",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Conversar com Yanes sobre o sistema de triagem",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 5,
      text: "AAAAAAAAAAAAAAA",
      category: "Trabalho",
      isCompleted: false,
    },
  ]);

  function addTodo(titulo, categoria) {
    console.log('titulo: ', titulo, ' categoria: ', categoria);
    const novoTodos = [...todos, {
      id: Math.floor(Math.random() * 1000),
      text: titulo,
      category: categoria,
      isCompleted: false,
    }]
    setTodos(novoTodos);
  }

  return (
    <div className='app max-w-4xl mx-auto p-6 bg-zinc-200'>
      <h1 className='text-4xl font-extrabold text-gray-900 mb-6'>Lista de Tarefas</h1>
      <TodoList todos={todos} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
