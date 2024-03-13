// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// // import  '../src/components/CSS/logic.css'; // You'll need to create a CSS file for styling

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleLogin = () => {
//     // Add your login logic here
//   };

//   const handleForgotPassword = () => {
//     // Add your forgot password logic here
//   };

//   return (
//     <div className="container">
//       <div className="formContainer">
//         <div className="headerContainer">
//         <img className="headerImage" src={require('../components/image/FH_logos.png').default} alt="header" />

//         </div>
//         <div className="boxContent">
//           <div className="inputContainer">
//             <input
//               type="email"
//               placeholder="Email Address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="input"
//             />
//           </div>
//         </div>
//         <div className="boxContent">
//           <div className="inputContainer">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Password"
//               value={password}
//               onChange={handlePasswordChange}
//               className="input"
//             />
//             <button className="showPasswordButton" onClick={toggleShowPassword}>
//               {showPassword ? 'Hide' : 'Show'}
//             </button>
//           </div>
//         </div>
//         <button className="forgotPasswordButton" onClick={handleForgotPassword}>
//           Forgot Password?
//         </button>
//         <button className="loginButton" onClick={handleLogin}>
//           Login
//         </button>
//         <div className="signupTopic">
//           <span>I don't have an account? </span>
//           <Link to="/signup" className="signupLink">Create Account</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // TODO: Validate the email and password

//     // TODO: Send the login request to the backend

//     // If the login is successful, navigate to the dashboard page
//     navigate("/dashboard");
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import '../CSS/Login.css'; // Assuming you have a separate CSS file for styling
// import backgroundImage from '../components/image/Medium_B_User_Profile.png'; // Import your background image

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const handleForgotPassword = () => {
//     console.log('Forgot password clicked');
//     // Add logic for handling forgot password
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleLogin = () => {
//     console.log('Login clicked');
//     // Add login logic
//   };

//   return (
//     <div className="container">
//       <div className="form-container">
//         <div className="header-container">
//           <img src={require('../components/image/FH_logos.png')} alt="Logo" className="header-image" />
//           <img src={require('../components/image/Film_hook.png')} alt='logo' className='header2-image' />
//         </div>
//         <div className="box-content"  >
//           <div className="input-container"  style={{ backgroundImage: `url(${backgroundImage})` }}>
//             <input
//               placeholder="Email Address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="input"
//               type="email"
//             />
//           </div>
//           <div className="input-container">
//             <input
//               placeholder="Password"
//               value={password}
//               onChange={handlePasswordChange}
//               className="input"
//               type={showPassword ? 'text' : 'password'}
//             />

//           </div>
//           <div className="forgot-password" onClick={handleForgotPassword}>
//             Forgot Password?
//           </div>

//           <button className="login-button" onClick={handleLogin}>
//             Login
//           </button>
//           <div className="signup-container">
//             <span className="signup-topic">I don't have an account?</span>
//             <button className="signup-button" onClick={() => console.log('Navigate to Sign Up')}>
//               Create Account
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



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
    marginBottom: '20px',
    padding: '20px',
    flexDirection: 'column'
  },
  headerImage: {
    width: '35%',

  },
  header2Image: {

    width: '40%',

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
    padding: '5px',
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
    marginBottom: '5%'
  },
  signupcontiner:{
   
  // position: "absolute",

// padding:"10%",
// marginLeft:'-25%'
   
  },
  signup: {
   
color:'red',
// position: "absolute",

// padding:"10%",
// marginLeft:'-25%'
  },
  signupfirst:{
    // padding: '10px',
    // backgroundColor: 'black',
    // color: 'white',
    // border: 'none',
    // borderRadius: '5px',
    // fontSize: '16px',
    // cursor: 'pointer',
    // transition: 'background-color 0.3s',
    // marginTop:'10px',
  }

};

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
