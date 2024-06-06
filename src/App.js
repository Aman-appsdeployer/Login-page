
import React, { useState } from 'react';
import './App.css';

function App() {
  const [signupUsername, setSignupUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhoneNumber, setSignupPhoneNumber] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form onSubmit={handleSignupSubmit}>
          <label htmlFor="chk" aria-hidden="true">Sign up</label>
          <input type="text" name="txt" placeholder="User name" value={signupUsername} onChange={(e) => setSignupUsername(e.target.value)} required />
          <input type="email" name="email" placeholder="Email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} required />
          <input type="password" name="pswd" placeholder="Password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} required />
          <button type="submit">Sign up</button>
        </form>
      </div>

      <div className="login">
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="chk" aria-hidden="true">Login</label>
          <input type="email" name="email" placeholder="Email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
          <input type="password" name="pswd" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;

