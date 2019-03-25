import * as React from "react";
import { Provider } from "react-redux";
import Form from "./Form";
import { configureStore } from "./store";

const store = configureStore();

export default () => (
  <Provider store={store}>
    <Form />
  </Provider>
);
