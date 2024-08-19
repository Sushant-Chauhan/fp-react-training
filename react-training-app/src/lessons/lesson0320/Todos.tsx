import * as React from "react";
import { TodoContextType, ITodo } from "./types.todo";
import { TodoContext } from "./todoContext";
import Todo from "./Todo";

const Todos = () => {
  const { todos, updateTodo } = React.useContext(
    TodoContext
  ) as TodoContextType;
  return (
    <>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} updateTodo={updateTodo} todo={todo} />
      ))}
    </>
  );
};

export default Todos;
