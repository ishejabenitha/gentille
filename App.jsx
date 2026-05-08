import React, { useState } from "react";
import Dashboard from "./dashboard";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");


  const handleLogin = (username, password) => {
    const validUser = {
      username: "admin",
      password: "password123",
    };

    if (username === validUser.username && password === validUser.password) {
      setUser(username);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="font-sans p-5 bg-slate-50 min-h-screen">
      {!user ? (
        <LoginForm onLogin={handleLogin} error={error} />
      ) : (
        <Dashboard user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}
const LoginForm = ({ onLogin, error }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="max-w-sm mx-auto p-6 border border-gray-200 rounded-3xl shadow-lg bg-white">
      <h2 className="text-center text-2xl font-semibold mb-4">Login</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-slate-950 text-white rounded-lg hover:bg-slate-800 transition"
        >
          Log In
        </button>
      </form>
      <button
        type="button"
        onClick={() => alert("Create New Account feature coming soon!")}
        className="w-full py-2 mt-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
      >
        Create New Account
      </button>
    </div>
  );
};

export default App;