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

//             Admin                 //

import AdminLogin from "../admin/AdminLogin";
import AdminLayout from "../admin/AdminLayout";
import AdminDashboard from "../admin/AdminDashboard";
import AdminProducts from "../admin/AdminProducts";
import AdminOrders from "../admin/AdminOrders";
import AdminUsers from "../admin/AdminUsers";

//   Admin can manage the  products //

import AddProduct from "../admin/ProductManagement/AddProduct";
import EditProduct from "../admin/ProductManagement/EditProduct";

function AppRoutes() {

  return (

  <Routes>

    {/* Home */}
    <Route path="/" element={<Home />} />

    {/* Authentication */}
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    {/* Shopping */}
    <Route path="/cart" element={<Cart />} />
    <Route path="/product/:id" element={<ProductDetails />} />
    {/* <Route path="/checkout" element={<Checkout />} /> */}
    <Route path="/payment" element={<Payment />} />

    {/* Order Success */}
    <Route
      path="/order-success"
      element={<OrderSuccess />}
    />

    {/* Categories */}
    <Route path="/gym" element={<Gym />} />
    <Route path="/men" element={<Men />} />
    <Route path="/women" element={<Women />} />
    <Route path="/kids" element={<Kids />} />
    <Route path="/indoor" element={<Indoor />} />
    <Route path="/outdoor" element={<Outdoor />} />

    {/* ================= ADMIN ================= */}

    <Route
      path="/admin-login"
      element={<AdminLogin />}
    />

    <Route
      path="/admin"
      element={<AdminLayout />}
    >

      <Route
        index
        element={<AdminDashboard />}
      />

      <Route
        path="products"
        element={<AdminProducts />}
      />

      <Route
        path="orders"
        element={<AdminOrders />}
      />

      <Route
        path="users"
        element={<AdminUsers />}
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

       {/* ================= Admin can manages the products  ================= */}

       <Route
         path="add-product"
         element={<AddProduct />}
      />

        <Route
        path="edit-product/:id"
        element={<EditProduct />}
       />

    </Route>

  </Routes>

);

}

export default AppRoutes;