import "./App.css";
import Posts from "./components/Posts";
import Register from "./components/Register";
import React from "react";

function App() {
  return (
    <>
      <div className="App">
        <Posts></Posts>
      </div>
      <aside className="Register">
        <Register></Register>
      </aside>
    </>
  );
}

export default App;
