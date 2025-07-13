import React, { createContext, useState, useEffect } from 'react';
import { gapi } from 'gapi-script';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const clientId = 'import.meta.env.VITE_CLIENT_ID.apps.googleusercontent.com';
  const scopes = [
    'https://www.googleapis.com/auth/yt-analytics.readonly',
    'https://www.googleapis.com/auth/youtube.readonly',
  ];

  useEffect(() => {
    const initClient = () => {
      gapi.client
        .init({
          clientId,
          scope: scopes.join(' '),
        })
        .then(() => {
          const authInstance = gapi.auth2.getAuthInstance();
          if (authInstance.isSignedIn.get()) {
            const googleUser = authInstance.currentUser.get();
            const authResponse = googleUser.getAuthResponse(true);
            setToken(authResponse.access_token);
          }
        });
    };

    gapi.load('client:auth2', initClient);
  }, []);

  const signIn = () => {
    const authInstance = gapi.auth2.getAuthInstance();
    authInstance.signIn().then((googleUser) => {
      const authResponse = googleUser.getAuthResponse(true);
      setToken(authResponse.access_token);
    });
  };

  const signOut = () => {
    const authInstance = gapi.auth2.getAuthInstance();
    authInstance.signOut();
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
