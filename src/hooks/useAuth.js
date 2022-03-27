import React, { useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
function useAuth(auth) {
  const [authUser, setAuthUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log(auth);
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        setIsAuthenticated(true);
      } else {
        setAuthUser(null);
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, [authUser]);

  return { authUser, setAuthUser, isAuthenticated };
}

export default useAuth;
