import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <a href="/" className="logo">
          facebook<span>Clown</span>
        </a>
        <nav className="nav">
          <a href="/" className="nav-link" aria-label="Главная страница">
            Главная
          </a>
          <a href="/about" className="nav-link" aria-label="О нас">
            О нас
          </a>
          <a href="/contacts" className="nav-link" aria-label="Контакты">
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;