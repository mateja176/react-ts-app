import * as React from "react";
import { render } from "react-dom";
import App from "./App";
import isProd from "./isProd";

const renderApp = () => render(<App />, document.getElementById("root"));

renderApp();

if (!isProd()) {
  module.hot.accept("./App.tsx", renderApp);
}
