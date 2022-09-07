import type { NextPage } from "next";
import { useStore } from "src/state/todos";

const Home: NextPage = () => {
  const todos = useStore((state) => state.todos);
  const toggleTodo = useStore((state) => state.toggleTodo);

  return (
    <div>
      <h3>TODO一覧</h3>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label style={{ fontSize: "2rem" }} />
          <input
            type="checkbox"
            onChange={() => toggleTodo(todo.id)}
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
          {todo.text}
        </div>
      ))}
    </div>
  );
};

export default Home;
