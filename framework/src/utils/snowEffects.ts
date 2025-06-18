export const createSnowflake = () => {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  const symbols = ['❄️', '❅', '❆', '★', '✦'];
  snowflake.textContent = symbols[Math.floor(Math.random() * symbols.length)] || '❄️';
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${3 + Math.random() * 5}s`;
  snowflake.style.opacity = `${Math.random()}`;
  snowflake.style.fontSize = `${Math.random() * 20 + 10}px`;
  
  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
};

export const activateSnowfall = () => {
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      createSnowflake();
    }, i * 100);
  }
};