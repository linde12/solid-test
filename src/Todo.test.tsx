import { render } from 'solid-js/dom';
import Todo, {TodoItem} from './Todo';

it('todo renders', () => {
  const div = document.createElement('div')
  const todo: TodoItem = { id: 'deadbeef', text: 'abc', completed: true }
  const App = () => <Todo todo={todo} onClick={() => {}} />
  const dispose = render(App, div)
  dispose()
})
