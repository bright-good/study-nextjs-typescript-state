import { FC } from "react";
import { useCountTodos } from "src/state/todo";

export const TodoCounter: FC = () => {
  const countTodos = useCountTodos();
  return <h2>TODO: {countTodos}件</h2>;
};
