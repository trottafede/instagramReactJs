import React, { useState } from "react";
import "./Login.css";

import GooglePlay from "./googlePlay.png";
import appStore from "./appStore.svg";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (name === "fede" && password === "fede") {
      alert("Correct password");
    } else {
      alert("Incorrect password");
    }
  };
  return (
    <div id="login" className="container">
      <div className="row">
        <div className="col-lg-12">
          <div id="outerContainer">
            <h1>Instagram</h1>
            <div className="mb-3 mt-3">
              <input
                type="email"
                className="form-control"
                id="username"
                aria-describedby="emailHelp"
                placeholder="Phone number, username, or email"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="button-addon2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="show"
              >
                Show
              </button>
            </div>
            <div className="d-grid gap-2 col-12 mx-auto">
              <button
                onClick={handleLogin}
                className="btn btn-primary"
                type="button"
              >
                Login
              </button>
            </div>
            <div>
              <hr />

              <a href="/">Log in with Facebook</a>

              <a href="/">Forgot password?</a>
            </div>
          </div>

          <div id="secondContainer">
            <p>
              Don't have an account? <a href="/">Sign up</a>
            </p>
          </div>

          <div>
            <p>Get the app.</p>

            <img id="appStore" src={appStore} alt="appStore" />
            <img id="GooglePlay" src={GooglePlay} alt="GooglePlay" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
