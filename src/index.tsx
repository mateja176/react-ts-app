import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import isProd from "./isProd";
import { configureStore } from "./store";

const store = configureStore();

(store as any).test = Math.random();

console.log("value changes with every hot reload", (store as any).test);

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root"),
  );

renderApp();

if (!isProd()) {
  module.hot.accept("./App.tsx", renderApp);
}
