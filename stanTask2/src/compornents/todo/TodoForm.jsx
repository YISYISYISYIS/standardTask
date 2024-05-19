import { useState } from "react";

const TodoForm = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      return alert("제목과 내용을 입력하세요");
    }
    const newCard = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };

    setTodos((prev) => [...prev, newCard]);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={title}
          placeholder="제목"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={content}
          placeholder="내용"
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default TodoForm;
