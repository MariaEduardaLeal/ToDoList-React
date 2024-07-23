import { useState } from "react";

const TodoForm = ({addTodo}) => {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(titulo, ' ', categoria);
        addTodo(titulo, categoria);
        setTitulo('');
        setCategoria('');
    }

    return (<div className="todo-form">
        <div className="w-full">
            <h2 className='text-4xl font-extrabold text-gray-900 mb-6'>Criar tarefa</h2>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <input
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                    type="text"
                    placeholder="Digite o título"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={titulo} />
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Selecione uma categoria:
                    <input
                        onChange={(e) => setCategoria(e.target.value)}
                        required
                        list="categoria"
                        placeholder="Selecione uma categoria"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={categoria} />
                </label>

                <datalist id="categoria">
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </datalist>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Criar nova tarefa</button>
            </form>
        </div>
    </div>)
}

export default TodoForm;