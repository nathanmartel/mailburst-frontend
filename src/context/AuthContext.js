import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {

  const history = useHistory();
  const userInfo = localStorage.getItem('userInfo');
  const expiresAt = localStorage.getItem('expiresAt');
  const [authState, setAuthState] = useState({
    token: null,
    userInfo: userInfo ? JSON.parse(userInfo) : null,
    expiresAt: expiresAt ? JSON.parse(expiresAt) : null
  });

  const setAuthInfo = ({ token, userInfo, expiresAt }) => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('expiresAt', JSON.stringify(expiresAt));
    setAuthState({ token, userInfo, expiresAt });
  };

  // Check token from cookie vs. userInfo here?
  const isAuthenticated = () => {
    if (!authState.userInfo || !authState.expiresAt)
      return false;
    const currentTime = new Date().getTime() / 1000;
    return currentTime < authState.expiresAt;
  };

  const logout = () => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('expiresAt');
    setAuthState({
      token: null,
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
        isAuthenticated,
        logout
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
