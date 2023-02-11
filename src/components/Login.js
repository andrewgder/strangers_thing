import React, { useState } from "react";
import { login } from "../api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h2> Login Form</h2>
      <form
        id="login"
        onSubmit={async (event) => {
          // write code here
          event.preventDefault();
          try {
            const result = await login();
            console.log(result);
            alert(result);
          } catch (err) {
            console.error(err);
          } finally {
            setPassword("");
            setUsername("");
          }
        }}
      >
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button name="login">Login</button>
      </form>
    </>
  );
};

export default Login;
