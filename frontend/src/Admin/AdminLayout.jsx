import "./Admin.css";

import { Link, Outlet, useNavigate } from "react-router-dom";

function AdminLayout() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("isAdmin");

    alert("Admin Logged Out Successfully");

    navigate("/");

    window.location.reload();

  };

  return (

    <div className="admin-container">

      {/* Sidebar */}

      <div className="admin-sidebar">

        <h2>ANVIRA ADMIN</h2>

        <Link to="/admin">
          📊 Dashboard
        </Link>

        <Link to="/admin/products">
          📦 Products
        </Link>

        <Link to="/admin/orders">
          🛒 Orders
        </Link>

        <Link to="/admin/users">
          👥 Users
        </Link>

        <button
          className="admin-logout"
          onClick={handleLogout}
        >
          🚪 Logout
        </button>

      </div>

      {/* Right Side */}

      <div className="admin-content">

        <Outlet />

      </div>

    </div>

  );

}

export default AdminLayout;