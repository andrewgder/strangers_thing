import "./App.css";
import Posts from "./components/Posts";
import Register from "./components/Register";
import Login from "./components/Login";
import React from "react";

function App() {
  return (
    <>
      <div className="App">
        <Posts></Posts>
      </div>
      <div className="register">
        <Register></Register>
      </div>
      <div className="login">
        <Login></Login>
      </div>
    </>
  );
}

export default App;
