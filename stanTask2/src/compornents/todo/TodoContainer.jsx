import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const defaultCard = [
    {
      id: 1,
      title: "리액트 공부",
      content: "리액트 공부를 합니다.",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부 두번째",
      content: "리액트 공부를 계속 합니다!!.",
      isDone: true,
    },
  ];
  const [todos, setTodos] = useState(defaultCard);

  const WorkingTodos = todos.filter((todo) => !todo.isDone);
  const DoneTodos = todos.filter((todo) => todo.isDone);

  return (
    <div>
      <TodoForm setTodos={setTodos} />
      <TodoList setTodos={setTodos} title="Working" todos={WorkingTodos} />
      <TodoList setTodos={setTodos} title="Done" todos={DoneTodos} />
    </div>
  );
};

export default TodoContainer;
