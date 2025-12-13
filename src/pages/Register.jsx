import React, { useState } from "react";
import "./Register.css";
import instaLogo from "../assets/images/instagramLogo.png";

export default function Register() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (!email || !fullName || !username || !password) {
      alert("Please fill all fields");
      return;
    }
    console.log("Account Created:", { email, fullName, username });
    alert("Account created successfully!");
  };

  return (
    <div className="register-wrapper">
      <div className="register-box">
        <img src={instaLogo} className="register-logo" alt="Instagram" />
        <p className="top-text">
          Sign up to see photos and videos from your friends.
        </p>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Mobile Number or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="register-btn">
            Sign up
          </button>
        </form>
      </div>

      <div className="login-redirect-box">
        Have an account? <a href="/login">Log in</a>
      </div>
    </div>
  );
}
