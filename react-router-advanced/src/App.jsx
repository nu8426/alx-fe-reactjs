import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth.jsx";
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import BlogPost from "./components/BlogPost.jsx";
import Login from "./components/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

export default function App() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <BrowserRouter>
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
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login login={login} />} />

        {/* Protected Routes */}
        <Route
          path="/profile/:id/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <ProtectedRoute>
              <BlogPost />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
