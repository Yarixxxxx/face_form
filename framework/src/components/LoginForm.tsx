import React from 'react';
import { useAuthStore } from '../store/authStore';
import SocialLogin from './SocialLogin';

const LoginForm: React.FC = () => {
  const {
    email,
    password,
    remember,
    isLoading,
    error,
    setEmail,
    setPassword,
    setRemember,
    login
  } = useAuthStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="login-card">
      <h2 className="login-title">Войдите в Facebook Clown</h2>
      
      <SocialLogin />
      
      <div className="divider">
        <span className="divider-text">или</span>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Электронная почта или номер телефона</label>
          <input
            id="email"
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите email или телефон"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
          />
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="remember-group">
          <input
            id="remember"
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <label htmlFor="remember">Сохранить вход</label>
        </div>
        
        <button
            type="submit"
            className={`login-btn ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
        >
            {isLoading ? 'Вход...' : 'Войти'}
        </button>
      </form>
      
      <a href="#" className="forgot-password">Забыли пароль?</a>
      
      <div className="signup-link">
        <p>Нет аккаунта? <a href="#">Зарегистрироваться</a></p>
      </div>
    </div>
  );
};

export default LoginForm;