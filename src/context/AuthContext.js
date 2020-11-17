import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router';
import { HOME_URL } from 'constants/urls';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {

  const history = useHistory();
  const user = localStorage.getItem('user');
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

  const logout = () => {
    localStorage.removeItem('user');
    setAuthState({
      _id: null,
      email: null,
      firstName: null,
      lastName: null
    });
    history.push(HOME_URL);
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
