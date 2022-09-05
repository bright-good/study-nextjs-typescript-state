import type { NextPage } from "next";
import { useContext } from "react";
import { TodoContext } from "src/pages/_app";
import { Todo } from "src/types";

const Home: NextPage = () => {
  const { todos, setTodos } = useContext<TodoContext>(TodoContext);
  
  const toggleIsDone = (id: Todo["id"]) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

  return (
    <div>
      <h3>TODO一覧</h3>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label style={{ fontSize: "2rem" }} />
          <input
            type="checkbox"
            onChange={() => toggleIsDone(todo.id)}
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
          {todo.text}
        </div>
      ))}
    </div>
  );
};

export default Home;
