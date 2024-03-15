import React from 'react';
import './index.css';

function Signup() {
  const [isSignup, setIsSignup] = React.useState(true);

  return (
    <div className='nero'>
    <div className="container">
      <h1>{isSignup ? 'Signup' : 'Login'}</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          {isSignup && <input type="text" id="username" className="form-control" />}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" className="form-control" />
        </div>
        {isSignup && <button type="submit" className="btn btn-primary" style={{ marginBottom: '1rem'}}>Signup</button>}
        {!isSignup && <button type="submit" className="btn btn-primary" style={{marginBottom: '1rem'}}>Login</button>}
      </form>
      <button type="button" className="btn btn-link" onClick={() => setIsSignup(!isSignup)}>
        {isSignup ? 'Already have an account? Login here.' : 'Dont have an account? Signup here.'}
      </button>
    </div>
    </div>
  );
}

export default Signup;