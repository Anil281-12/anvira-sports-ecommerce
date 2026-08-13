import { useState, useEffect } from "react";

import "./ManageAddress.css";

function ManageAddress() {

  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    pincode: "",
    state: "",
    city: "",
    address: "",
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

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={address.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="mobile"
        placeholder="Mobile Number"
        value={address.mobile}
        onChange={handleChange}
      />

      <div className="address-row">

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={address.pincode}
          onChange={handleChange}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={address.city}
          onChange={handleChange}
        />

      </div>

      <input
        type="text"
        name="state"
        placeholder="State"
        value={address.state}
        onChange={handleChange}
      />

      <textarea
        name="address"
        placeholder="Full Address"
        value={address.address}
        onChange={handleChange}
      />

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