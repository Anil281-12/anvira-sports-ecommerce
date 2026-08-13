import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function Navbar() {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  const handleLogout = () => {

    localStorage.removeItem("loggedInUser");

    alert("Logged Out Successfully");

    navigate("/");

    window.location.reload();

  };

  return (

    <nav className="navbar">

      {/* Top Navbar */}

      <div className="navbar-top">

        {/* Logo */}

        <div
          className="logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <h1>ANVIRA SPORTS</h1>
        </div>

        {/* Search */}

        <div className="search-box">

          <input
            type="text"
            placeholder="Search Sports Products..."
          />

          <button>🔍</button>

        </div>

        {/* Right Buttons */}

        <div className="nav-buttons">

          {/* ================= USER NOT LOGGED IN ================= */}

          {!loggedInUser ? (

            <>

              <Link to="/cart">
                <button>
                  🛒 Cart ({cartItems.length})
                </button>
              </Link>

              <Link to="/admin-login">
                <button className="admin-btn">
                  👨‍💼 Admin
                </button>
              </Link>

              <Link to="/login">
                <button>
                  Login
                </button>
              </Link>

              <Link to="/register">
                <button>
                  Register
                </button>
              </Link>

            </>

          ) : (

            <>
              {/* ================= USER LOGGED IN ================= */}

              <Link to="/cart">
                <button>
                  🛒 Cart ({cartItems.length})
                </button>
              </Link>

              <div className="navbar-profile-menu">

                <button
                  className="profile-btn"
                  onClick={() =>
                    setShowMenu(!showMenu)
                  }
                >
                  {loggedInUser.name
                    .charAt(0)
                    .toUpperCase()}
                </button>

                {showMenu && (

                  <div className="dropdown">

                    <Link
                      to="/profile"
                      onClick={() =>
                        setShowMenu(false)
                      }
                    >
                      <p>👤 My Profile</p>
                    </Link>

                    <Link
                      to="/profile/orders"
                      onClick={() =>
                        setShowMenu(false)
                      }
                    >
                      <p>📦 My Orders</p>
                    </Link>

                    <Link
                      to="/profile/wishlist"
                      onClick={() =>
                        setShowMenu(false)
                      }
                    >
                      <p>❤️ Wishlist</p>
                    </Link>

                    <Link
                      to="/profile/address"
                      onClick={() =>
                        setShowMenu(false)
                      }
                    >
                      <p>📍 Manage Address</p>
                    </Link>

                    <Link
                      to="/profile/password"
                      onClick={() =>
                        setShowMenu(false)
                      }
                    >
                      <p>🔒 Change Password</p>
                    </Link>

                    <p
                      onClick={() => {

                        setShowMenu(false);

                        handleLogout();

                      }}
                    >
                      🚪 Logout
                    </p>

                  </div>

                )}

              </div>

            </>

          )}

        </div>

      </div>

      {/* Bottom Navbar */}

      <div className="navbar-bottom">

        <Link to="/">Home</Link>

        <Link to="/gym">
          Gym Equipment
        </Link>

        <Link to="/men">
          Men
        </Link>

        <Link to="/women">
          Women
        </Link>

        <Link to="/kids">
          Kids
        </Link>

        <Link to="/indoor">
          Indoor
        </Link>

        <Link to="/outdoor">
          Outdoor
        </Link>

      </div>

    </nav>

  );

}

export default Navbar;