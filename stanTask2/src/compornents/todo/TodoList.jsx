import TodoItem from "./TodoItem";

const TodoList = ({ setTodos, title, todos }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem setTodos={setTodos} todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
