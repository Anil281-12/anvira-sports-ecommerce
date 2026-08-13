import { useState } from "react";

import "./ChangePassword.css";

function ChangePassword() {

  const [passwords, setPasswords] = useState({

    current: "",

    newPassword: "",

    confirmPassword: "",

  });

  const handleChange = (e) => {

    setPasswords({

      ...passwords,

      [e.target.name]: e.target.value,

    });

  };

  const updatePassword = () => {

    if (
      passwords.newPassword !==
      passwords.confirmPassword
    ) {

      alert("Passwords do not match");

      return;

    }

    alert(
      "Password Updated Successfully"
    );

  };

  return (
     
   

<div className="password-container">

<h2 className="password-title">
Change Password
</h2>

<div className="password-form">

<input
type="password"
name="current"
placeholder="Current Password"
onChange={handleChange}
/>

<input
type="password"
name="newPassword"
placeholder="New Password"
onChange={handleChange}
/>

<input
type="password"
name="confirmPassword"
placeholder="Confirm Password"
onChange={handleChange}
/>

<button
className="update-password-btn"
onClick={updatePassword}
>
Update Password
</button>

</div>

</div>

);

}

export default ChangePassword;