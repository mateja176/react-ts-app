import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import isProd from "../isProd";
import reducer from "./reducer";

const middleware = applyMiddleware(logger);

export const configureStore = () => {
  if (isProd()) {
    return createStore(reducer);
  } else {
    const store = createStore(reducer, composeWithDevTools(middleware));

    // ? state is kept but component gets `disconnected`
    module.hot.accept("./reducer", () => {
      const nextRootReducer = require("./reducer/index");
      store.replaceReducer(nextRootReducer);
    });
    // * same behavior for
    // module.hot.accept("./reducer", () => {
    //   store.replaceReducer(reducer);
    // });

    return store;
  }
};
