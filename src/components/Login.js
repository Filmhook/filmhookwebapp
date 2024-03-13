import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import  '../src/components/CSS/logic.css'; // You'll need to create a CSS file for styling

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Add your login logic here
  };

  const handleForgotPassword = () => {
    // Add your forgot password logic here
  };

  return (
    <div className="container">
      <div className="formContainer">
        <div className="headerContainer">
        <img className="headerImage" src={require('../components/image/FH_logos.png').default} alt="header" />

        </div>
        <div className="boxContent">
          <div className="inputContainer">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
          </div>
        </div>
        <div className="boxContent">
          <div className="inputContainer">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="input"
            />
            <button className="showPasswordButton" onClick={toggleShowPassword}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <button className="forgotPasswordButton" onClick={handleForgotPassword}>
          Forgot Password?
        </button>
        <button className="loginButton" onClick={handleLogin}>
          Login
        </button>
        <div className="signupTopic">
          <span>I don't have an account? </span>
          <Link to="/signup" className="signupLink">Create Account</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
