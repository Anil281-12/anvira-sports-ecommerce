import "./Profile.css";

import {
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Profile() {

  const navigate = useNavigate();

  const location = useLocation();

  const user = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  const menuItems = [

    {
      title: "My Profile",
      path: "/profile",
    },

    {
      title: "My Orders",
      path: "/profile/orders",
    },

    {
      title: "Wishlist",
      path: "/profile/wishlist",
    },

    {
      title: "Manage Address",
      path: "/profile/address",
    },

    {
      title: "Change Password",
      path: "/profile/password",
    },

  ];

  return (

    <>

      <Navbar />

      <div className="profile-page">

        {/* Left Sidebar */}

        <div className="profile-sidebar">

          <div className="profile-card">

            <div className="profile-circle">

              {user?.name
                ? user.name.charAt(0).toUpperCase()
                : "U"}

            </div>

            <h3>

              {user?.name || "Guest User"}

            </h3>

            <p>

              {user?.email || "No Email"}

            </p>

          </div>

          <div className="profile-sidebar-menu">

            {menuItems.map((item) => (

              <button

                key={item.path}

                className={
                  location.pathname === item.path
                    ? "active-menu"
                    : ""
                }

                onClick={() =>
                  navigate(item.path)
                }

              >

                {item.title}

              </button>

            ))}

          </div>

        </div>

        {/* Right Side */}

        <div className="profile-content">

          <Outlet />

        </div>

      </div>

      <Footer />

    </>

  );

}

export default Profile;