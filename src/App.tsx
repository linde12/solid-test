import { createSignal } from 'solid-js'
import Todo, { TodoItem } from './Todo'

const id = () => Math.random().toString(16).substr(2, 7)

export default () => {
  const [text, setText] = createSignal('')
  const [todos, setTodos] = createSignal([
    { text: 'Buy milk', completed: false, id: id(), },
    { text: 'Eat food', completed: false, id: id(), },
  ] as TodoItem[])

  const handleSubmit = () => {
    setTodos([...todos(), { text: text(), completed: false, id: id(), }])
    setText('')
  }

  const toggleTodo = (todo: TodoItem) => {
    const idx = todos().findIndex(t => t.id === todo.id)
    const newTodos = todos()
    newTodos[idx].completed = !newTodos[idx].completed
    setTodos(newTodos)
  }

  return (
    <div className="w-full flex flex-wrap justify-center">
      <ul className="w-full">
        {todos().map(todo => <Todo todo={todo} onClick={() => toggleTodo(todo)} />)}
      </ul>
      <div className="w-full max-w-sm flex">
        <input
          placeholder="Text"
          className="w-full bg-gray-200 appearance-none border-none rounded-l py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-300"
          type="text"
          onInput={e => setText(e.target.value)}
          value={text()}
        />
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={handleSubmit}>Add</button>
      </div>
    </div>
  )
};
