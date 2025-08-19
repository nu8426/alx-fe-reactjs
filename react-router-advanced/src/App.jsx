import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import Login from "./components/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import BlogPost from "./components/BlogPost.jsx";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/profile/123">Profile</Link> |{" "}
        <Link to="/blog/101">Blog Post</Link> |{" "}
        {isAuthenticated ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </nav>

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login login={login} />} />

        {/* Protected profile route with nested routes */}
        <Route
          path="/profile/:id/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Protected dynamic blog post route */}
        <Route
          path="/blog/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <BlogPost />
            </ProtectedRoute>
          }
        />

        {/* Fallback for undefined routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
