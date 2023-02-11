import React, { useState } from "react";
import { createAccount } from "../api";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h2> Create account form</h2>
      <form
        id="createAccount"
        onSubmit={async (event) => {
          // write code here
          event.preventDefault();
          try {
            const result = await createAccount(username, password);
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
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" />
        </label>
        <button name="createAccount">Create Account</button>
      </form>
    </>
  );
};

export default Register;
