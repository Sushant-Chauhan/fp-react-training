import * as React from "react";
import TodoProvider from "./todoContext";
import Todos from "./Todos";
import AddTodo from "./AddToDo";

export default function ContextApp() {
  return (
    <TodoProvider>
      <main className="App">
        <h1>My Todos</h1>
        <AddTodo />
        <Todos />
      </main>
    </TodoProvider>
  );
}
