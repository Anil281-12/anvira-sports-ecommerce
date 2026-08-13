// function Register() {
//   return (
//     <h1>Register Page</h1>
//   );
// }

// export default Register;

import { useState } from "react";
import "./Register.css";

import { Link, useNavigate } from "react-router-dom";

import { registerUser, getUsers } from "../../services/userService";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: "",
    password: "",
    confirmPassword: "",
    photo: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo") {
      setUser({
        ...user,
        photo: files[0] ? files[0].name : "",
      });
    } else {
      setUser({
        ...user,
        [name]: value,
      });
    }
  };

   const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !user.name ||
    !user.email ||
    !user.mobile ||
    !user.password ||
    !user.confirmPassword
  ) {
    alert("Please fill all fields");
    return;
  }

  if (user.password !== user.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // Get all registered users
  const users = await getUsers();

  // Check duplicate email
  const emailExists = users.find(
    (item) => item.email.toLowerCase() === user.email.toLowerCase()
  );

  if (emailExists) {
    alert("This email is already registered. Please login.");
    return;
  }

  const newUser = {
    name: user.name,
    email: user.email,
    mobile: user.mobile,
    dob: user.dob,
    password: user.password,
    photo: user.photo,
  };

  await registerUser(newUser);

  alert("Registration Successful");

  navigate("/login");
};

  return (
    <div className="register-container">

      <form className="register-form" onSubmit={handleSubmit}>

        <h2>Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Full Name"
          value={user.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          value={user.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="mobile"
          placeholder="Enter Phone Number"
          value={user.mobile}
          onChange={handleChange}
        />

        <input
          type="date"
          name="dob"
          value={user.dob}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={user.confirmPassword}
          onChange={handleChange}
        />

        <input
          type="file"
          name="photo"
          onChange={handleChange}
        />

        <button type="submit">
          Register
        </button>

        <p>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </form>

    </div>
  );
}

export default Register;