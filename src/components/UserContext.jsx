import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userID, setUserID] = useState('');
  const [userStats, setUserStats] = useState(null);

  return (
    <UserContext.Provider value={{ userID, setUserID, userStats, setUserStats }}>
      {children}
    </UserContext.Provider>
  );
};
