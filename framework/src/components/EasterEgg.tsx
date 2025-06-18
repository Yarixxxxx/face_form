import React, { useState, useEffect, useRef } from 'react';
import './EasterEgg.css';

const EasterEgg: React.FC = () => {
const [showMessage, setShowMessage] = useState(false);
const snowContainerRef = useRef<HTMLDivElement>(null);
const snowflakes = useRef<HTMLDivElement[]>([]);

const createSnowflake = () => {
  if (!snowContainerRef.current) return;
  
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  const symbols = ['❄️', '❅', '❆', '★', '✦'];
  snowflake.textContent = symbols[Math.floor(Math.random() * symbols.length)] || '❄️';
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.animationDuration = 3 + 's';
  snowflake.style.opacity = Math.random().toString();
  snowflake.style.fontSize = Math.random() * 20 + 10 + 'px';
  
  snowContainerRef.current.appendChild(snowflake);
  snowflakes.current.push(snowflake);

  setTimeout(() => {
    snowflake.remove();
    snowflakes.current = snowflakes.current.filter(sf => sf !== snowflake);
  }, 5000);
};

const activateSnowfall = () => {
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      createSnowflake();
    }, i * 100);
  }
};

const handleClick = () => {
  setShowMessage(true);
  activateSnowfall();
  
  setTimeout(() => {
    setShowMessage(false);
  }, 3000);
};

useEffect(() => {
  return () => {
    snowflakes.current.forEach(sf => sf.remove());
  };
}, []);

return (
  <>
    <div 
      className="easter-egg" 
      onClick={handleClick}
      title="Нажми меня!"
      aria-label="Пасхалка"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      ?
    </div>
    
    {showMessage && (
      <div className="easter-egg-message">
        Вы нашли пасхалку! Facebook Clown приветствует вас!
      </div>
    )}
    
    <div ref={snowContainerRef} />
  </>
);
};

export default EasterEgg;