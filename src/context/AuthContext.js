import React, { createContext, useState } from 'react';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {

  const user = localStorage.getItem('user');
  // const user = false;
  const [authState, setAuthState] = useState({
    _id: user ? JSON.parse(user)._id : null,
    email: user ? JSON.parse(user).email : null,
    firstName: user ? JSON.parse(user).firstName : null,
    lastName: user ? JSON.parse(user).lastName : null,
  });

  const setAuthInfo = ({ _id, email, firstName, lastName }) => {
    localStorage.setItem('user', JSON.stringify({ _id, email, firstName, lastName }));
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
