import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
}
