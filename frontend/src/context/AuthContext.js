import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]); // dummy users

  const login = (phone, name) => {
    // check if user already exists
    const existing = users.find(u => u.phone === phone);

    if (existing) {
      setUser(existing);
    } else {
      const newUser = {
        name: name || "User",
        phone
      };

      setUsers([...users, newUser]);
      setUser(newUser);
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);