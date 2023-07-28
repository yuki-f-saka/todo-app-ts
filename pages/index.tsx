import { ChangeEvent, FC, FormEvent, useState } from 'react';
import Todo from '../components/Todo';

interface TodoItem {
  text: string;
  complete: boolean;
}

const Home: FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const handleNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleNewTodo = (e: FormEvent) => {
    e.preventDefault();
    setTodos([...todos, { text: newTodo, complete: false}]);
    setNewTodo('');
  };

  const handleDeleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const handleToggleComplete = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>ToDo List</h1>
      <form onSubmit={handleNewTodo}>
        <input value={newTodo} onChange={handleNewTodoChange} />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo, index) => (
        <Todo key={index} {...todo} onDelete={() => handleDeleteTodo(index)} onComplete={() => handleToggleComplete(index)} />
      ))}
    </div>
  );
};

export default Home;