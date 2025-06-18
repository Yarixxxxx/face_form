interface Credentials {
  email: string;
  password: string;
}

type ErrorMessages = Record<keyof Credentials, string>;

const loginForm = document.getElementById('loginForm') as HTMLFormElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
const rememberCheckbox = document.getElementById('remember') as HTMLInputElement;
const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;
const easterEgg = document.getElementById('easterEgg') as HTMLDivElement;

const errorMessages: ErrorMessages = {
  email: 'Пожалуйста, введите действительный email или номер телефона',
  password: 'Пароль должен содержать не менее 6 символов',
};

const validCredentials: Credentials = {
  email: 'user@example.com',
  password: 'Password123',
};

export function validateEmail(value: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  return emailRegex.test(value) || phoneRegex.test(value);
}

export function validatePassword(value: string): boolean {
  return value.length >= 6;
}

export function showError(input: HTMLInputElement, message: string): void {
  const formGroup = input.parentElement as HTMLElement;
  let errorElement = formGroup.querySelector('.error-message') as HTMLDivElement;

  if (!errorElement) {
    errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.color = '#f02849';
    errorElement.style.fontSize = '12px';
    errorElement.style.marginTop = '4px';
    formGroup.appendChild(errorElement);
  }

  errorElement.textContent = message;
  input.classList.add('invalid-input');
}

export function clearError(input: HTMLInputElement): void {
  const formGroup = input.parentElement as HTMLElement;
  const errorElement = formGroup.querySelector('.error-message') as HTMLDivElement;

  if (errorElement) {
    errorElement.remove();
  }

  input.classList.remove('invalid-input');
}

export function validateForm(): boolean {
  let isValid = true;

  if (!validateEmail(emailInput.value)) {
    showError(emailInput, errorMessages.email);
    isValid = false;
  } else {
    clearError(emailInput);
  }

  if (!validatePassword(passwordInput.value)) {
    showError(passwordInput, errorMessages.password);
    isValid = false;
  } else {
    clearError(passwordInput);
  }

  return isValid;
}

function saveCredentials(): void {
  if (rememberCheckbox.checked) {
    localStorage.setItem('savedEmail', emailInput.value);
  } else {
    localStorage.removeItem('savedEmail');
  }
}

function restoreCredentials(): void {
  const savedEmail = localStorage.getItem('savedEmail');
  if (savedEmail) {
    emailInput.value = savedEmail;
    rememberCheckbox.checked = true;
  }
}

function createSnowflake(): void {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  const symbols = ['❄️', '❅', '❆', '★', '✦'];
  snowflake.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.animationDuration = '3s';
  snowflake.style.opacity = Math.random().toString();
  snowflake.style.fontSize = Math.random() * 20 + 10 + 'px';

  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

function activateSnowfall(): void {
  for (let i = 0; i < 10000; i++) {
    setTimeout(() => {
      createSnowflake();
    }, i * 100);
  }
}

function showEasterEgg(): void {
  const message = document.createElement('div');
  message.textContent = 'Вы нашли пасхалку! Facebook Clown приветствует вас!';
  message.style.position = 'fixed';
  message.style.bottom = '80px';
  message.style.right = '20px';
  message.style.backgroundColor = '#1877f2';
  message.style.color = 'white';
  message.style.padding = '15px';
  message.style.borderRadius = '8px';
  message.style.zIndex = '1000';
  message.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
  message.style.maxWidth = '250px';
  message.style.textAlign = 'center';
  message.style.animation = 'fadeIn 0.5s ease';

  document.body.appendChild(message);

  setTimeout(() => {
    message.style.animation = 'fadeOut 0.5s ease';
    setTimeout(() => {
      message.remove();
    }, 500);
  }, 3000);

  activateSnowfall();
}

function handleSubmit(event: Event): void {
  event.preventDefault();

  if (validateForm()) {
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');

    setTimeout(() => {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;

      if (
        emailInput.value === validCredentials.email &&
        passwordInput.value === validCredentials.password
      ) {
        saveCredentials();

        alert('Вход выполнен успешно! Добро пожаловать!');

        activateSnowfall();
      } else {
        alert('Неверный email или пароль. Попробуйте снова.');
      }
    }, 1500);
  }
}

function init(): void {
  restoreCredentials();

  loginForm.addEventListener('submit', handleSubmit);
  easterEgg.addEventListener('click', showEasterEgg);

  const style = document.createElement('style');
  style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(10px); }
        }
        
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            border: 0;
        }
    `;
  document.head.appendChild(style);
}

window.addEventListener('DOMContentLoaded', init);
