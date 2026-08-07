const AUTH_STORAGE_KEY = "saipal_admin_session";
// Use relative path — works via Vite proxy in dev and on the same host in production
const API_BASE_URL = "/api";

export const authService = {
  // Simple hashing function for client-side password verification (kept for backward compatibility)
  hashPassword: (password) => {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
      const char = password.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0;
    }
    return hash.toString(16);
  },

  login: async (email, password) => {
    const cleanEmail = email.trim().toLowerCase();
    
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: cleanEmail, password }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.message || "Invalid email or password");
    }

    const data = await response.json(); // contains { user, token }
    
    const session = {
      user: data.user,
      token: data.token,
      loginAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString(), // 8 hours session
    };

    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
    return session;
  },

  logout: () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  },

  getCurrentUser: () => {
    try {
      const sessionData = localStorage.getItem(AUTH_STORAGE_KEY);
      if (!sessionData) return null;

      const session = JSON.parse(sessionData);
      if (new Date(session.expiresAt) < new Date()) {
        localStorage.removeItem(AUTH_STORAGE_KEY);
        return null;
      }
      return session.user;
    } catch (e) {
      return null;
    }
  },

  getToken: () => {
    try {
      const sessionData = localStorage.getItem(AUTH_STORAGE_KEY);
      if (!sessionData) return null;

      const session = JSON.parse(sessionData);
      if (new Date(session.expiresAt) < new Date()) {
        localStorage.removeItem(AUTH_STORAGE_KEY);
        return null;
      }
      return session.token;
    } catch (e) {
      return null;
    }
  },

  isAuthenticated: () => {
    return authService.getCurrentUser() !== null;
  },
};
