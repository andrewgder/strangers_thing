import React, { useState, useEffect } from "react";
import { login } from "../api";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    if (!loginStatus) {
      // perform any other logout related actions here
    }
  }, [loginStatus]);

  return (
    <>
      {!loginStatus && (
        <>
          <h2> Login Form</h2>
          <form
            id="login"
            onSubmit={async (event) => {
              // write code here
              event.preventDefault();
              try {
                const result = await login(username, password);
                props.setUserToken("update");
              } catch (err) {
                console.error(err);
              } finally {
                setPassword("");
                setUsername("");

                setLoginStatus(true);
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
      )}
    </>
  );
};

export default Login;
