import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/" className="footer-link" aria-label="Главная">
            Главная
          </a>
          <a href="/about" className="footer-link" aria-label="О нас">
            О нас
          </a>
          <a href="/advertising" className="footer-link" aria-label="Реклама">
            Реклама
          </a>
          <a href="/terms" className="footer-link" aria-label="Условия использования">
            Условия
          </a>
          <a href="/privacy" className="footer-link" aria-label="Политика конфиденциальности">
            Конфиденциальность
          </a>
          <a href="/settings" className="footer-link" aria-label="Настройки">
            Настройки
          </a>
          <a href="/help" className="footer-link" aria-label="Помощь">
            Помощь
          </a>
        </div>
        <div className="copyright">
          Facebook Clown © {currentYear}. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;