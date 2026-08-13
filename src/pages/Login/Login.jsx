// function Login() {
//   return (
//     <h1>Login Page</h1>
//   );
// }

// export default Login;

import { useState } from "react";
import "./Login.css";

import { Link, useNavigate } from "react-router-dom";

import { getUsers } from "../../services/userService";

function Login() {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

   const handleSubmit = async (e) => {
  e.preventDefault();

  const users = await getUsers();

  console.log("Users from API:", users);
  console.log("Entered Email:", loginData.email);
  console.log("Entered Password:", loginData.password);

  const validUser = users.find(
    (user) =>
      user.email.trim().toLowerCase() === loginData.email.trim().toLowerCase() &&
      user.password === loginData.password
  );

  console.log("Valid User:", validUser);

  if (validUser) {

  localStorage.setItem(
    "loggedInUser",
    JSON.stringify(validUser)
  );

  alert("Login Successful");

  navigate("/");

  window.location.reload();

} else {

  alert("Invalid Email or Password");

}

};

  return (
    <div className="login-container">

      <form className="login-form" onSubmit={handleSubmit}>

        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={loginData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={loginData.password}
          onChange={handleChange}
        />

        <button type="submit">
          Login
        </button>

        <p>
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>

      </form>

    </div>
  );
}

export default Login;