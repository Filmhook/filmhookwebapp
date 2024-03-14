import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',

  },
  formContainer: {
    width: '500px', /* Adjust the width as needed */
    height: '700px', /* Adjust the height as needed */
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '30px',
    padding: '20px',
    flexDirection: 'column'
  },
  headerImage: {
    width: '40%',
    alignItems:'center',
    marginLeft:'10%',
    marginTop:'-10%'

  },
  header2Image: {

    width: '60%',
    marginTop:'2%'

  },
  boxContent: {
    marginBottom: '10%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    position: 'relative',
    padding: '10px',
    right: '10%',
  },
  input: {
    width: '150%',
    height: '60px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  forgotPassword: {
    padding: '10px',
    marginLeft: '35%',
  },
  loginButton: {
    width: '20%',
    padding: '10px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginBottom: '5%',
    marginTop:'10%',
  },
  signupcontiner:{
   marginTop:'5%',
  },
  signup: {
   
color:'red',
// position: "absolute",

// padding:"10%",
// marginLeft:'-25%'
  },
  // signupfirst:{
  //   // padding: '10px',
  //   // backgroundColor: 'black',
  //   // color: 'white',
  //   // border: 'none',
  //   // borderRadius: '5px',
  //   // fontSize: '16px',
  //   // cursor: 'pointer',
  //   // transition: 'background-color 0.3s',
  //   // marginTop:'10px',
  // }

};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword] = useState(false);

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // Add logic for handling forgot password
  };

  // const toggleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log('Login clicked');
    // Add login logic
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <div style={styles.headerContainer}>
          <img src={require('../components/image/FH_logos.png')} alt="Logo" style={styles.headerImage} />
          <img src={require('../components/image/Film_hook.png')} alt='logo' style={styles.header2Image} />
        </div>
        <div style={styles.boxContent}>
          <div style={styles.inputContainer} >
            <input
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              type="email"
            />
          </div>
          <div style={styles.inputContainer}>
            <input
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              style={styles.input}
              type={showPassword ? 'text' : 'password'}
            />
          </div>
          <div style={styles.forgotPassword} onClick={handleForgotPassword}>
            Forgot Password?
          </div>
          <button style={styles.loginButton} onClick={handleLogin}>
            Login
          </button>
          <div style={styles.signupcontiner}>
            <span style={styles.signupfirst}>I don't have an account?</span>
            <Link to="/Signup" style={styles.signup} >create account</Link>      </div>
        </div>
      </div>
    </div>
  );
}
