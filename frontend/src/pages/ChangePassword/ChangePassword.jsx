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


      {/* Page Title */}

      <h2 className="password-title">
        Change Password
      </h2>


      {/* Dark Password Section */}

      <div className="password-section">


        {/* Password Form */}

        <div className="password-form">


          {/* Current Password */}

          <div className="password-field">

            <label>
              Current Password
            </label>

            <input
              type="password"
              name="current"
              placeholder="Enter Current Password"
              value={passwords.current}
              onChange={handleChange}
            />

          </div>


          {/* New Password */}

          <div className="password-field">

            <label>
              New Password
            </label>

            <input
              type="password"
              name="newPassword"
              placeholder="Enter New Password"
              value={passwords.newPassword}
              onChange={handleChange}
            />

          </div>


          {/* Confirm Password */}

          <div className="password-field">

            <label>
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm New Password"
              value={passwords.confirmPassword}
              onChange={handleChange}
            />

          </div>


          {/* Update Button */}

          <button
            className="update-password-btn"
            onClick={updatePassword}
          >
            Update Password
          </button>


        </div>

      </div>


    </div>

  );

}


export default ChangePassword;