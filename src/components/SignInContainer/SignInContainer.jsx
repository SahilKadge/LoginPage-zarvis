import { useState } from 'react';
import './SignInContainer.css';

const SignInContainer = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign In</h2>
        <form>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forget Password</a>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="register-link"> Donot have an account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
};

export default SignInContainer;
