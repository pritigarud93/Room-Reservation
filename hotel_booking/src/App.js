import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";

/* function App() {
  return (
    <div>
      <Header></Header>
    </div>
  );
} */
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <input type="button" onClick={incrementCount} />
    </div>
  );
};

export default App;
