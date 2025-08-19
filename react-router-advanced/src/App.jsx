import useAuth from "./hooks/useAuth.jsx";

export default function App() {
  const { isAuthenticated, login, logout } = useAuth();

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
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login login={login} />} />

        <Route path="/profile/:id/*" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/blog/:id" element={<ProtectedRoute><BlogPost /></ProtectedRoute>} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
