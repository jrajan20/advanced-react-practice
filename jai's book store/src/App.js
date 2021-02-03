import React, { useState } from "react";
import { useActions } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import { store } from "./redux";
import { addBookAction } from "./redux";
import { deleteBookAction } from "./redux";
import { updateBookAction } from "./redux";

import BookList from "./components/BookList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="main-title">Jai's Book Store</div>
        <BookList />
      </div>
    </Provider>
  );
}

export default App;
