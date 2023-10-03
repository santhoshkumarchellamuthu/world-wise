import React, { useState } from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useData } from "./PostProvider";

const Login = () => {
  const { login } = useData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (login(email, password)) {
      navigate("/wise/City");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login">
        <form action="" id="form">
          <div className="form_input">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="santhosh@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="form_input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div>
            <ul>
              <li>
                <Button
                  type="button"
                  className="loginbtn"
                  onClick={handleLogin}
                  variant="contained"
                  color="success"
                >
                  Login
                </Button>
              </li>
            </ul>
            <Outlet />
          </div>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </>
  );
};

export default Login;
