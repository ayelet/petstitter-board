import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./LogIn.css";

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

//TODO  - change to axios
async function loginUser(credentials) {
  return fetch("http://localhost:8000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };
  return (
    <div className="form-wrapper">
      <div className="login-wrapper">
        <h1>Sign in to your account</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <p>email</p>
              <input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>
          </div>
          <label>
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>
            <button type="submit">Continue</button>
          </div>
        </form>
      </div>
      <div className="login-wrapper">
        <div>
          <span>Don’t have an account?</span>
        </div>
        <button type="button" className="btn theme--dark">
          <span>Sign Up</span>
        </button>
      </div>
    </div>
  );
}
