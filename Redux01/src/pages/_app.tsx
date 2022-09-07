import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Layout } from "src/components/Layout";
import { store } from "src/state";
import { Todo } from "src/types";

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
