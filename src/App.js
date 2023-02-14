import "./App.css";
import Posts from "./components/Posts";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import React, { useState, useEffect } from "react";

function App() {
  const [userToken, setUserToken] = useState(localStorage.getItem("token"));

  useEffect(() => {}, [userToken]);

  return (
    <>
      {console.log("App.JS Page token:", userToken)}
      <div className="App">
        <Posts></Posts>
      </div>
      <div className="register">{!userToken && <Register></Register>}</div>
      <div className="forms">
        {userToken ? (
          <Logout userToken={userToken} setUserToken={setUserToken}></Logout>
        ) : (
          <Login userToken={userToken} setUserToken={setUserToken}></Login>
        )}
      </div>
    </>
  );
}

export default App;
