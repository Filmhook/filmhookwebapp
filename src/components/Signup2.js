import React, { useState } from 'react';

const Signup2 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'white',
    },
    form_container: {
      backgroundColor: 'white',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '80%',
      maxWidth: '500px',
      padding: '80px',
      borderRadius: '8px',
    },
    input: {
      width: '100%',
      height: '60px',
      marginBottom: '20px',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      boxSizing: 'border-box',
    },
    backButton: {
      width: '30%',
      height: '40px',
      backgroundColor: 'grey',
      color: 'white',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
    },
    signupButton:{
      width: '30%',
      height: '40px',
      backgroundColor: 'grey',
      color: 'white',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      marginLeft:'40%'
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div style={styles.container}>
      <div style={styles.form_container}>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
            <img src={require('../components/image/FH_logos.png')} style={{ width: '20%', height: 'auto' }} alt="Logo" />
            <img src={require('../components/image/Film_hook_name.png')} style={{ width: '40%', height: 'auto', marginLeft: '10px' }} alt='name' />
          </div>
          <input
            placeholder='Email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            placeholder='Password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <input
            placeholder='Confirm Password'
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
          />
          <input
            placeholder='Phone'
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.backButton} >Back</button>
          <button type="submit" style={styles.signupButton}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup2;
