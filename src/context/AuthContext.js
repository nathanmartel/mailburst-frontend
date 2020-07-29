import React, { createContext, useState } from 'react';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {

  const [authState, setAuthState] = useState({
    _id: null,
    email: null,
    firstName: null,
    lastName: null
  });

  const setAuthInfo = ({ _id, email, firstName, lastName }) => {
    setAuthState({
      _id,
      email,
      firstName,
      lastName
    });
  };

  return (
    <Provider
      value={{
        authState,
        setAuthState: authInfo => setAuthInfo(authInfo)
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
