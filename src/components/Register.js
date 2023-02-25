import React, { useState } from "react";
import { createAccount } from "../api";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  return (
    <>
      <h2> Create account form</h2>
      <form
        id="createAccount"
        onSubmit={async (event) => {
          // write code here
          event.preventDefault();
          if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters long");
            alert("Password must be at least 8 characters long");
          } else if (
            !password.match(
              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
            )
          ) {
            setPasswordError(
              "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
            );
            alert(
              "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
            );
          } else if (password !== confirmPassword) {
            setPasswordError("Passwords do not match");
            alert("Passwords do not match");
          } else {
            // Password is valid, do something here like submitting the form
            setPasswordError("");
            console.log("Password is valid");
            try {
              const result = await createAccount(username, password);
              console.log(result);
              alert(result);
            } catch (err) {
              console.error(err);
              alert("Please try again");
            } finally {
              setPassword("");
              setUsername("");
              setConfirmPassword("");
            }
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
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button name="createAccount">Create Account</button>
      </form>
    </>
  );
};

export default Register;
