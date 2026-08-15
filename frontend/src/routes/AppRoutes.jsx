import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import Cart from "../pages/Cart/Cart";
import ProductDetails from "../pages/productDetails/productDetails";
// import Checkout from "../pages/Checkout/Checkout";
import Payment from "../pages/Payment/Payment";

import Gym from "../pages/Gym/Gym";
import Men from "../pages/Men/Men";
import Women from "../pages/Women/Women";
import Kids from "../pages/Kids/Kids";
import Indoor from "../pages/Indoor/Indoor";
import Outdoor from "../pages/Outdoor/Outdoor";

// Profile Pages
import Profile from "../pages/Profile/Profile";
import MyProfile from "../pages/MyProfile/MyProfile";
import MyOrders from "../pages/MyOrders/MyOrders";
import Wishlist from "../pages/Wishlist/Wishlist";
import ManageAddress from "../pages/ManageAddress/ManageAddress";
import ChangePassword from "../pages/ChangePassword/ChangePassword";

// Order Success
import OrderSuccess from "../pages/OrderSuccess/OrderSuccess";

// ================= ADMIN =================

import AdminLogin from "../Admin/AdminLogin";
import AdminLayout from "../Admin/AdminLayout";
import AdminDashboard from "../Admin/AdminDashboard";
import AdminProducts from "../Admin/AdminProducts";
import AdminOrders from "../Admin/AdminOrders";
import AdminUsers from "../Admin/AdminUsers";

// Admin Product Management
import AddProduct from "../Admin/ProductManagement/AddProduct";
import EditProduct from "../Admin/ProductManagement/EditProduct";

function AppRoutes() {
  return (
    <Routes>

      {/* ================= HOME ================= */}

      <Route path="/" element={<Home />} />

      {/* ================= AUTHENTICATION ================= */}

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      {/* ================= SHOPPING ================= */}

      <Route path="/cart" element={<Cart />} />

      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />

      {/* <Route path="/checkout" element={<Checkout />} /> */}

      <Route
        path="/payment"
        element={<Payment />}
      />

      {/* ================= ORDER SUCCESS ================= */}

      <Route
        path="/order-success"
        element={<OrderSuccess />}
      />

      {/* ================= CATEGORIES ================= */}

      <Route path="/gym" element={<Gym />} />

      <Route path="/men" element={<Men />} />

      <Route path="/women" element={<Women />} />

      <Route path="/kids" element={<Kids />} />

      <Route path="/indoor" element={<Indoor />} />

      <Route path="/outdoor" element={<Outdoor />} />

      {/* ================= ADMIN LOGIN ================= */}

      <Route
        path="/admin-login"
        element={<AdminLogin />}
      />

      {/* ================= ADMIN ================= */}

      <Route
        path="/admin"
        element={<AdminLayout />}
      >

        {/* Admin Dashboard */}
        <Route
          index
          element={<AdminDashboard />}
        />

        {/* Admin Products */}
        <Route
          path="products"
          element={<AdminProducts />}
        />

        {/* Admin Orders */}
        <Route
          path="orders"
          element={<AdminOrders />}
        />

        {/* Admin Users */}
        <Route
          path="users"
          element={<AdminUsers />}
        />

        {/* Add Product */}
        <Route
          path="add-product"
          element={<AddProduct />}
        />

        {/* Edit Product */}
        <Route
          path="edit-product/:id"
          element={<EditProduct />}
        />

      </Route>

      {/* ================= PROFILE ================= */}

      <Route
        path="/profile"
        element={<Profile />}
      >

        <Route
          index
          element={<MyProfile />}
        />

        <Route
          path="orders"
          element={<MyOrders />}
        />

        <Route
          path="wishlist"
          element={<Wishlist insideProfile={true} />}
        />

        <Route
          path="address"
          element={<ManageAddress />}
        />

        <Route
          path="password"
          element={<ChangePassword />}
        />

      </Route>

    </Routes>
  );
}

export default AppRoutes;