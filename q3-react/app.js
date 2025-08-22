import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import categoryTreeSelect from "./components/TreeSelect.js";
import "antd/dist/reset.css"; // Ant Design styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);