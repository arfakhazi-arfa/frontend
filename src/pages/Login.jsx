import React, { useState } from "react";
import "./Login.css";

import phoneMock from "../assets/images/img1.png";
import instaLogo from "../assets/images/instagramLogo.png";

export default function Login({ onLogin, goToRegister, goToForgot }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      alert("Please enter username & password");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      onLogin(username);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="login-wrapper">
      {/* LEFT IMAGE */}
      <div className="left-side">
        <img src={phoneMock} className="phone-img" alt="Instagram Preview" />
      </div>

      {/* RIGHT FORM */}
      <div className="right-side">
        <div className="login-box">
          <img src={instaLogo} alt="Instagram" className="insta-logo" />
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="text"
              placeholder="Phone number, username, or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <button className="forgot-btn" type="button" onClick={goToForgot}>
            Forgot Password?
          </button>

          <div className="divider">
            <span></span> OR <span></span>
          </div>
        </div>

        <div className="signup-box">
          Don’t have an account?
          <button className="signup-btn" onClick={goToRegister}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
