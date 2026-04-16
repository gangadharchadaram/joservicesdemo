import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]); // dummy users

  

  useEffect(() => {
  const saved = localStorage.getItem("user");
  if (saved) setUser(JSON.parse(saved));
}, []);

  const login = (phone, name, role = "USER") => {
  const userData = {
    name,
    phone,
    role // 👈 IMPORTANT
  };

  setUser(userData);
  localStorage.setItem("user", JSON.stringify(userData));
};


  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);