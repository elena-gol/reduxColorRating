import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App.js";
import store from "./store/store.js";
import "./scss/main.scss";
import "font-awesome/scss/font-awesome.scss";
import "./scss/newColor.scss";
import "./scss/sort.scss";
import "./scss/colors.scss";
import "./scss/star.scss";
import "./favicon.ico";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)