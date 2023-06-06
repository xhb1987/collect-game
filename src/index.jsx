import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import makeStore from "./state/store";
import { CollectGame } from "./app/CollectGame";

const store = makeStore();

const createRoot = (RootElement) => (
  <Provider store={store}>
    <RootElement />
  </Provider>
);

const load = () => {
  const loadPromise = new Promise((resolve) => {
    render(createRoot(CollectGame), document.getElementById("app"), () => {
      resolve();
    });
  });
  return loadPromise;
};

load();
