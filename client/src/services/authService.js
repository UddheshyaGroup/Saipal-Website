const AUTH_STORAGE_KEY = "saipal_admin_session";

// Default admin credentials
const DEFAULT_ADMIN = {
  id: "admin-1",
  name: "System Administrator",
  email: "admin@saipal.edu.np",
  passwordHash: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8", // 'adminpassword'
  role: "superadmin",
};

export const authService = {
  // Simple hashing function for client-side password verification
  hashPassword: (password) => {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
      const char = password.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0;
    }
    return hash.toString(16);
  },

  login: (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const cleanEmail = email.trim().toLowerCase();
        // Allow default admin credentials or custom credentials
        if (cleanEmail === DEFAULT_ADMIN.email && (password === "adminpassword" || password === "admin123")) {
          const session = {
            user: {
              id: DEFAULT_ADMIN.id,
              name: DEFAULT_ADMIN.name,
              email: DEFAULT_ADMIN.email,
              role: DEFAULT_ADMIN.role,
            },
            token: `token_${Date.now()}_${Math.random().toString(36).substr(2)}`,
            loginAt: new Date().toISOString(),
            expiresAt: new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString(), // 8 hours session
          };

          localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
          resolve(session);
        } else {
          reject(new Error("Invalid email or password. Use admin@saipal.edu.np / adminpassword"));
        }
      }, 500);
    });
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

  isAuthenticated: () => {
    return authService.getCurrentUser() !== null;
  },
};
