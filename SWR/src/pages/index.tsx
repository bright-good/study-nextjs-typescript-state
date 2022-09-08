import type { NextPage } from "next";
import { Dispatch, SetStateAction } from "react";
import { Todo } from "src/types";
import useSWR from "swr";

type Props = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const fetcher = async (...args: Parameters<typeof fetch>) => {
  const res = await fetch(...args);
  const json = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return json;
};

const Home: NextPage<Props> = ({ todos, setTodos }) => {
  const { data, error } = useSWR<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h3>TODO一覧</h3>
      {data.map((todo) => (
        <div key={todo.id}>
          <label style={{ fontSize: "2rem" }}>
            <input
              type="checkbox"
              defaultChecked={todo.completed}
              // onChange={() => toggleIsDone(todo.id)}
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Home;
