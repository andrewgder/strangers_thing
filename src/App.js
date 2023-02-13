import "./App.css";
import Posts from "./components/Posts";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import React from "react";

function App() {
  const userToken = localStorage.getItem("token");

  return (
    <>
      {console.log("App.JS Page token:", userToken)}
      <div className="App">
        <Posts></Posts>
      </div>
      <div className="register">
        <Register></Register>
      </div>
      <div className="login">
        <Login></Login>
      </div>
      <div className="logout">
        <Logout></Logout>
      </div>
    </>
  );
}

export default App;
