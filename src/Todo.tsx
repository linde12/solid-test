export interface TodoItem {
  text: string,
  completed: boolean,
  id: string,
}

interface Props {
  todo: TodoItem,
  onClick: EventHandler,
}
export default ({ todo, onClick }: Props) => {
  return (
    <li onClick={onClick} className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl m-6 cursor-pointer">
      <div class="ml-6 pt-1">
        <p className="text-xl text-gray-900 leading-tight">{todo.text}</p>
        <span className="text-base text-gray-600 leading-normal">{todo.completed ? 'Completed' : 'Not completed'}</span>
      </div>
    </li>
  )
}
