const TodoItem = ({ setTodos, todo }) => {
  const { id, title, content, isDone } = todo;
  const deleteTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = () => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  return (
    <div>
      {title}
      {content}

      <div>
        <button onClick={toggleTodo}>{!isDone ? "확인" : "취소"}</button>
        <button onClick={deleteTodo}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
