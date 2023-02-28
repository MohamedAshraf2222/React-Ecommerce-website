import React from 'react'
import { Navigate, useLocation } from "react-router-dom"

const useAuth = () => {
  if (localStorage.getItem('userToken') === null) {
    return false;
  } else {
    return true
  }
};

const ProtectedRoute = ({ children }) => {
  const isAuth = useAuth();
  let location = useLocation();
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
};

export default ProtectedRoute;
