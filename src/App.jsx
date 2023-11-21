import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import TestApi from "./utils/TestApi";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <TestApi />
      </div>
    </Provider>
  );
}

export default App;
