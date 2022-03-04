import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewToDo from "./components/NewToDo";
import { Todo } from "./todo.model";
// function App() {
//   return <div className="App"></div>;
// }

const App: React.FC = () => {
  // const todos = [{ id: "t1", text: "walk 1km" }];
  // const todos = useState([])

  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewToDo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};
export default App;
