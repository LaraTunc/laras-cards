import React, { useState } from "react";

export const UserContext = React.createContext(null);

export const UserContextProvider = ({ children }) => {
  const [status, setStatus] = useState("idle");
  const [user, setUser] = useState();
  const [selectedCard, setSelectedCard] = useState();
  const [customMessage, setCustomMessage] = useState();

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        selectedCard,
        setSelectedCard,
        status,
        setStatus,
        customMessage,
        setCustomMessage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
