import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authService } from "../../services/authService";

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const isAuthenticated = authService.isAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
}
