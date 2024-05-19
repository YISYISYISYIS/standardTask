import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  return (
    <div>
      <TodoForm />
      <TodoList />
      <TodoList />
    </div>
  );
};

export default TodoContainer;
