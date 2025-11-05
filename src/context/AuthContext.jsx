// src/context/AuthContext.jsx
import React, { createContext, useContext, useState } from "react";
import { users } from "../data/users";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      setUser({ username: foundUser.username });
      return true; // 🔹 login exitoso
    } else {
      alert("Usuario o contraseña incorrectos");
      return false; // 🔹 login fallido
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