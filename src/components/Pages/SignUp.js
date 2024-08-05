import React from 'react';
import './SignUp.css';

function SignUp() {
  return (
    <div className="wrapper-container">
      <div className="wrapper">
        <form>
          <h1>Fitness Pro</h1>
          <div className="text-box">
            <input type="text" placeholder="Username" />
          </div>
          <div className="text-box">
            <input type="password" placeholder="Password" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
