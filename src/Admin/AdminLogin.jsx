import "./Admin.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (
      email === "admin@anvirasports.com" &&
      password === "admin123"
    ) {

      localStorage.setItem("isAdmin", "true");

      navigate("/admin");

    } else {

      alert("Invalid Admin Credentials");

    }

  };

  return (

    <div className="admin-login-page">

      <div className="admin-login-card">

        <h1>ANVIRA SPORTS</h1>

        <h2>Admin Login</h2>

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>

  );

}

export default AdminLogin;