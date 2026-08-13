import "./MyProfile.css";

function MyProfile() {

  const user = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  return (

    <div className="myprofile-container">

      <h2 className="profile-title">
        My Profile
      </h2>

      <div className="profile-info">

        <div className="profile-avatar">

          {user?.name?.charAt(0).toUpperCase()}

        </div>

        <div className="profile-details">

          <div className="profile-row">

            <span>Name</span>

            <p>{user?.name}</p>

          </div>

          <div className="profile-row">

            <span>Email</span>

            <p>{user?.email}</p>

          </div>

          <div className="profile-row">

            <span>Mobile</span>

            <p>{user?.mobile}</p>

          </div>

          <div className="profile-row">

            <span>Date of Birth</span>

            <p>{user?.dob}</p>

          </div>

        </div>

      </div>

      <button className="edit-profile-btn">

        Edit Profile

      </button>

    </div>

  );

}

export default MyProfile;