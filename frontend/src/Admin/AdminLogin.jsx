import "./Admin.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    // ==========================================
    // ADMIN LOGIN
    // ==========================================

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

        <div
            className="admin-login-page"
            style={{
                backgroundImage: `
                    linear-gradient(
                        rgba(0, 0, 0, 0.35),
                        rgba(0, 0, 0, 0.55)
                    ),
                    url("/adminlogin-bg.png")
                `
            }}
        >

            {/* ==========================================
                ADMIN LOGIN CARD
            ========================================== */}

            <div className="admin-login-card">

                <h1>
                    ANVIRA SPORTS
                </h1>

                <h2>
                    Admin Login
                </h2>


                {/* ==========================================
                    EMAIL INPUT
                ========================================== */}

                <input
                    type="email"
                    placeholder="Admin Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />


                {/* ==========================================
                    PASSWORD INPUT
                ========================================== */}

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />


                {/* ==========================================
                    LOGIN BUTTON
                ========================================== */}

                <button onClick={handleLogin}>
                    Login
                </button>

            </div>

        </div>

    );

}

export default AdminLogin;