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

    return store;
  }
};
