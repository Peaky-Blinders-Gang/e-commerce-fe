import { User } from '../types';
import { getToken, setToken, removeToken, setStoredUser, removeStoredUser } from '../utils/token';

const MOCK_USER: User = {
  id: 'user-1',
  email: 'user@example.com',
  name: 'John Doe',
};

const MOCK_PASSWORD = 'password';

export const AuthService = {
  async login(email: string, password: string): Promise<User> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (email.toLowerCase() !== MOCK_USER.email || password !== MOCK_PASSWORD) {
      throw new Error('Invalid email or password');
    }

    const token = `mock-token-${Date.now()}`;
    setToken(token);
    setStoredUser(JSON.stringify(MOCK_USER));

    return MOCK_USER;
  },

  logout(): void {
    removeToken();
    removeStoredUser();
  },

  getProfile(): User | null {
    if (typeof window === 'undefined') return null;
    const token = getToken();
    if (!token) return null;

    const raw = localStorage.getItem('authUser');
    if (!raw) return null;

    try {
      return JSON.parse(raw) as User;
    } catch {
      return null;
    }
  },

  isAuthenticated(): boolean {
    return Boolean(getToken());
  },
};
