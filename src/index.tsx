import * as React from "react";
import ReactDOM from "react-dom";
import { StoreProvider as Provider } from "easy-peasy";
import "./index.css";
import App from "./App";

import store from "./store";

ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <React.Suspense fallback="loading ...">
        <App />
      </React.Suspense>
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);
