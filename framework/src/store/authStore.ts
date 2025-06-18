import { create } from 'zustand';

interface AuthState {
  email: string;
  password: string;
  remember: boolean;
  isLoading: boolean;
  error: string | null;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setRemember: (remember: boolean) => void;
  login: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  email: localStorage.getItem('savedEmail') || '',
  password: '',
  remember: !!localStorage.getItem('savedEmail'),
  isLoading: false,
  error: null,
  
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setRemember: (remember) => set({ remember }),
  
  login: async () => {
    set({ isLoading: true, error: null });
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/;
      const isValidEmail = emailRegex.test(useAuthStore.getState().email) || 
                          phoneRegex.test(useAuthStore.getState().email);
      
      if (!isValidEmail) {
        throw new Error('Пожалуйста, введите действительный email или номер телефона');
      }
      
      if (useAuthStore.getState().password.length < 6) {
        throw new Error('Пароль должен содержать не менее 6 символов');
      }

      if (useAuthStore.getState().remember) {
        localStorage.setItem('savedEmail', useAuthStore.getState().email);
      } else {
        localStorage.removeItem('savedEmail');
      }

      alert('Вход выполнен успешно! Добро пожаловать!');
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ isLoading: false });
    }
  }
}));