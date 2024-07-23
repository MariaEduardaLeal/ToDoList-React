import React from "react";

const TodoForm = () => {
    return (<div className="todo-form">
        <div class="w-full">
            <h2 className='text-4xl font-extrabold text-gray-900 mb-6'>Criar tarefa</h2>
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <input type="text" placeholder="Digite o título" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <label class="block text-gray-700 text-sm font-bold mb-2">
                    Selecione uma categoria:
                    <input list="categoria" placeholder="Selecione uma categoria" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </label>

                <datalist id="categoria">
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </datalist>

                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Criar nova tarefa</button>
            </form>
        </div>
    </div>)
}

export default TodoForm;