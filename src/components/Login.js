import React, { useState } from 'react';
import '../CSS/Login.css'; // Assuming you have a separate CSS file for styling
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // Add logic for handling forgot password
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log('Login clicked');
    // Add login logic
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="header-container">
          <img src={require('../components/image/FH_logos.png')} alt="Logo" className="header-image" />
        </div>
        <div className="box-content">
          <div className="input-container">
            <input
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              type="email"
            />
          </div>
          <div className="input-container">
            <input
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="input"
              type={showPassword ? 'text' : 'password'}
            />
            <img src={require('../components/image/password_eye_show.png')} onClick={toggleShowPassword} alt="Show password" className="header-image" />
          </div>
          <button className="forgot-password-button" onClick={handleForgotPassword}>
            Forgot Password?
          </button>
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
          <div className="signup-container">
            <span className="signup-topic">I don't have an account?</span>
            <Link to="/signup" className="signup-button" >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
