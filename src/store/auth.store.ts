import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthService } from '../services/auth.service';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  refresh: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email, password) => {
        const user = await AuthService.login(email, password);
        set({ user, isAuthenticated: true });
      },
      logout: () => {
        AuthService.logout();
        set({ user: null, isAuthenticated: false });
      },
      refresh: () => {
        const user = AuthService.getProfile();
        set({ user, isAuthenticated: Boolean(user) });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
    }
  )
);
