import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {

  const history = useHistory();
  const userInfo = localStorage.getItem('userInfo');
  const expiresAt = localStorage.getItem('expiresAt');
  const [authState, setAuthState] = useState({
    userInfo: userInfo ? JSON.parse(userInfo) : null,
    expiresAt: expiresAt ? JSON.parse(expiresAt) : null
  });

  const setAuthInfo = ({ userInfo, expiresAt }) => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('expiresAt', JSON.stringify(expiresAt));
    setAuthState({ userInfo, expiresAt });
  };

  const logout = () => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('expiresAt');
    setAuthState({
      userInfo: null,
      expiresAt: null
    });
    history.push('/');
  };

  return (
    <Provider
      value={{
        authState,
        setAuthState: authInfo => setAuthInfo(authInfo),
        logout
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
