import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { Todo } from "src/types";

export const todosState = atom<Todo[]>({
  key: "todosState",
  default: [
    { id: 1, text: "foo", isDone: false },
    { id: 2, text: "bar", isDone: true },
  ],
});

export const coutTodosState = selector({
  key: "coutTodosState",
  get: ({ get }) => {
    const todos = get(todosState);

    return todos.length;
  },
});

export const useSetTodos = () => {
  return useSetRecoilState(todosState);
};

export const useTodosState = () => {
  return useRecoilState(todosState);
};

export const useCountTodos = () => {
  return useRecoilValue(coutTodosState);
};
