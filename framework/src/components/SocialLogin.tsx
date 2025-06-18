import React from 'react';
import './SocialLogin.css';

const SocialLogin: React.FC = () => {
  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  return (
    <div className="social-login">
      <button
        className="social-btn google-btn"
        onClick={handleGoogleLogin}
        aria-label="Войти через Google"
      >
        <span className="social-icon">G</span>
        Войти через Google
      </button>
    </div>
  );
};

export default SocialLogin;