import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import './index.css';
import { ModalProvider } from "./Context/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ModalProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </ModalProvider>
  </BrowserRouter>
);

