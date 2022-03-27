import React, { useState } from "react";
import { firebase } from "../firebase";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
function useAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebase.auth, (user) => {
      if (user) {
        setAuthUser(user);
        setIsAuthenticated(true);
      } else {
        setAuthUser(null);
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return { authUser, setAuthUser, isAuthenticated };
}

export default useAuth;
