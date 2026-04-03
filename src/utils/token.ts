const TOKEN_KEY = 'accessToken';
const USER_KEY = 'authUser';

export const getToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) return token;

  const match = document.cookie.match('(^|;)\\s*' + TOKEN_KEY + '\\s*=\\s*([^;]+)');
  return match ? match.pop() || null : null;
};

export const setToken = (token: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(TOKEN_KEY, token);
  document.cookie = `${TOKEN_KEY}=${token}; path=/; max-age=${60 * 60 * 24 * 7}`; // 7 days
};

export const removeToken = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(TOKEN_KEY);
  document.cookie = `${TOKEN_KEY}=; path=/; max-age=0`;
};

export const getStoredUser = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(USER_KEY);
};

export const setStoredUser = (json: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(USER_KEY, json);
};

export const removeStoredUser = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(USER_KEY);
};
