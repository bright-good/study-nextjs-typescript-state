import { useAtom } from "jotai";
import type { NextPage } from "next";
import { ComponentProps } from "react";
import { addTodoAtom } from "src/state/todos";
import { Todo } from "src/types";

const Add: NextPage = () => {
  const [_, setTodos] = useAtom(addTodoAtom);
  const handleSubmit: ComponentProps<"form">["onSubmit"] = (event) => {
    event.preventDefault();
    const text: Todo["text"] = event.currentTarget.text.value;
    setTodos({ text });
    event.currentTarget.reset();
  };

  return (
    <div>
      <h3>TODO追加</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" autoComplete="off" required />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Add;
