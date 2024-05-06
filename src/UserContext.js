// UserContext.js
import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [cedulaUsuario, setCedulaUsuario] = useState(null);

  return (
    <UserContext.Provider value={{ cedulaUsuario, setCedulaUsuario }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
