import React from "react";

export default function Login({ login }) {
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}
