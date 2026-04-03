import { AuthService } from './auth.service';
import { getToken } from '../utils/token';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL || 'http://localhost:3000';

interface ApiOptions extends RequestInit {
  secure?: boolean; // whether to attach auth header
}

export async function apiFetch<T>(endpoint: string, options: ApiOptions = {}): Promise<T> {
  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;

  const defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  const mergedHeaders = {
    ...defaultHeaders,
    ...(options.headers ? (options.headers as Record<string, string>) : {}),
  };

  if (options.secure !== false) {
    const token = getToken();
    if (token) {
      mergedHeaders.Authorization = `Bearer ${token}`;
    }
  }

  const response = await fetch(url, {
    ...options,
    headers: mergedHeaders,
  });

  if (response.status === 401) {
    AuthService.logout();
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
    throw new Error('Unauthorized');
  }

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || 'Network response was not ok');
  }

  if (response.status === 204) {
    return null as unknown as T;
  }

  return response.json();
}

