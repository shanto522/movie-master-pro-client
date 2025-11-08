import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const authInfo = {
    user,
    setUser,
    show,
    setShow,
    loading,
    setLoading,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
