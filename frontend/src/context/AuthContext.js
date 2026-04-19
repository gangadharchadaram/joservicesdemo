import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ Load user from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("user");

    if (saved && saved !== "null") {
      setUser(JSON.parse(saved));
    }
  }, []);

  // ✅ LOGIN
  const login = (phone, name, role = "USER") => {
    const userData = {
      name,
      phone,
      role
    };

    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // ✅ LOGOUT (🔥 FIXED)
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // 🔥 VERY IMPORTANT
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);