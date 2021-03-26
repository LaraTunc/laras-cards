import React, { useState } from "react";

export const UserContext = React.createContext(null);

export const UserContextProvider = ({ children }) => {
    const [ status, setStatus ] = useState("idle");
    const [ message, setMessage ]= useState();
    const [ userId, setUserId ] = useState(); // _id: userId
    const [ user, setUser ]= useState();
    const [ selectedCard, setSelectedCard ] = useState();

    return (
        <UserContext.Provider
            value={{
                userId,
                setUserId,
                user, 
                setUser,
                selectedCard,
                setSelectedCard,
                status, 
                setStatus,
                message, 
                setMessage
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

