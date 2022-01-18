import React, { useState, useEffect, useContext, createContext } from 'react';

interface LoginContextProps {
  isLogin: boolean;
}

interface LoginProviderProps {
  children: React.ReactNode;
}

const loginContextInit = {
  isLogin: false,
};

const LoginContext = createContext<LoginContextProps>(loginContextInit);

const LoginProvider = ({ children }: LoginProviderProps) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const user = localStorage.getItem('user');

  useEffect(() => {
    if (user) {
      setIsLogin(true);
    }
  }, [user]);

  const value = {
    isLogin,
    string: 1,
  };

  return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
};

const useLoginContext = () => useContext(LoginContext);

export { LoginProvider, useLoginContext };
