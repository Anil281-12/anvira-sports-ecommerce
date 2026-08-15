import { useState, useEffect } from "react";

import "./ManageAddress.css";

function ManageAddress() {

  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    pincode: "",
    locality: "",
    address: "",
    city: "",
    state: "",
    landmark: "",
    alternatePhone: "",
    addressType: "Home",
  });

  useEffect(() => {

    const saved = JSON.parse(
      localStorage.getItem("deliveryAddress")
    );

    if (saved) {

      setAddress(saved);

    }

  }, []);

  const handleChange = (e) => {

    setAddress({

      ...address,

      [e.target.name]: e.target.value,

    });

  };

  const saveAddress = () => {

    localStorage.setItem(
      "deliveryAddress",
      JSON.stringify(address)
    );

    alert("Address Saved Successfully");

  };

  return (

    <div className="address-container">

      <h2 className="address-title">
        Manage Address
      </h2>

      <div className="address-form">

        {/* Full Name and Mobile Number */}

        <div className="address-row">

          <div className="address-field">

            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter Full Name"
              value={address.name}
              onChange={handleChange}
            />

          </div>

          <div className="address-field">

            <label>Mobile Number</label>

            <input
              type="text"
              name="mobile"
              placeholder="Enter Mobile Number"
              value={address.mobile}
              onChange={handleChange}
            />

          </div>

        </div>


        {/* Pincode and Locality */}

        <div className="address-row">

          <div className="address-field">

            <label>Pincode</label>

            <input
              type="text"
              name="pincode"
              placeholder="Enter Pincode"
              value={address.pincode}
              onChange={handleChange}
            />

          </div>

          <div className="address-field">

            <label>Locality</label>

            <input
              type="text"
              name="locality"
              placeholder="Enter Locality"
              value={address.locality}
              onChange={handleChange}
            />

          </div>

        </div>


        {/* Full Address */}

        <div className="address-field">

          <label>Address</label>

          <textarea
            name="address"
            placeholder="Enter Full Address"
            value={address.address}
            onChange={handleChange}
          />

        </div>


        {/* City and State */}

        <div className="address-row">

          <div className="address-field">

            <label>City / District</label>

            <input
              type="text"
              name="city"
              placeholder="Enter City"
              value={address.city}
              onChange={handleChange}
            />

          </div>

          <div className="address-field">

            <label>State</label>

            <input
              type="text"
              name="state"
              placeholder="Enter State"
              value={address.state}
              onChange={handleChange}
            />

          </div>

        </div>


        {/* Landmark and Alternate Phone */}

        <div className="address-row">

          <div className="address-field">

            <label>Landmark</label>

            <input
              type="text"
              name="landmark"
              placeholder="Nearby Landmark"
              value={address.landmark}
              onChange={handleChange}
            />

          </div>

          <div className="address-field">

            <label>Alternate Phone</label>

            <input
              type="text"
              name="alternatePhone"
              placeholder="Alternate Mobile Number"
              value={address.alternatePhone}
              onChange={handleChange}
            />

          </div>

        </div>


        {/* Address Type */}

        <div className="address-type">

          <label>
            <input
              type="radio"
              name="addressType"
              value="Home"
              checked={address.addressType === "Home"}
              onChange={handleChange}
            />

            Home
          </label>


          <label>
            <input
              type="radio"
              name="addressType"
              value="Work"
              checked={address.addressType === "Work"}
              onChange={handleChange}
            />

            Work
          </label>

        </div>


        {/* Save Button */}

        <button
          className="save-address-btn"
          onClick={saveAddress}
        >
          Save Address
        </button>

      </div>

    </div>

  );

}

export default ManageAddress;