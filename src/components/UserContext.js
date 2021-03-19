import React, { useState } from "react";

export const UserContext = React.createContext(null);

export const UserContextProvider = ({ children }) => {
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState();
    const [user, setUser] = useState();
    const [selectedCard, setSelectedCard] = useState();

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                selectedCard,
                setSelectedCard,
                status, 
                setStatus,
                error, 
                setError,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

