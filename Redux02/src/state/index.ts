import { todosReducer } from "src/state/todos";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

// export const store = legacy_createStore(
//   combineReducers({
//     todos: todosReducer,
//   })
// );

export type RootState = ReturnType<typeof store.getState>;
