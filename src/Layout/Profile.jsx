import React, { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";

import { auth } from "../firebase.config";

const Profile = () => {
  const { user, setUser,handleUpdateProfile } = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    const form = e.target;
    const newName = form.name.value;
    const newPhoto = form.imgUrl.value;
    
   
   handleUpdateProfile(auth.currentUser, {
      displayName: newName,
      photoURL: newPhoto,
    })
      .then(() => {
       
        setUser({
          ...user,
          displayName: newName,
          photoURL: newPhoto,
        });
        setSuccess("Profile updated successfully!");
      })
      .catch((err) => setError(err.message));

    // Update password if provided
   
  };

  return (
    <div className="max-w-sm mx-auto bg-gradient-to-br from-white via-green-50 to-white shadow-2xl rounded-2xl p-7 border border-green-200 mt-10 transition-all duration-300">
      <div className="flex flex-col items-center">
        <img
          className="w-32 h-32 rounded-full object-cover border-4 border-green-300 shadow-md"
          src={user.photoURL}
          alt="profile"
        />

        <h2 className="text-3xl font-bold mt-4 text-green-700 tracking-wide">
          {user.displayName}
        </h2>
        <p className="text-gray-600 italic">{user.email}</p>

        <button
          className="mt-5 px-5 py-2 rounded-xl bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold w-full hover:scale-105 transition-all duration-200"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Editing" : "Update Profile"}
        </button>

        {showForm && (
          <form
            onSubmit={handleSave}
            className="mt-6 w-full space-y-3 animate-fadeIn"
          >
           
            <input
              className="input input-bordered w-full rounded-xl"
              name="name"
              type="text"
              placeholder="Your Name"
              defaultValue={user.displayName}
              required
            />
            <input
              className="input input-bordered w-full rounded-xl"
              name="imgUrl"
              type="text"
              placeholder="Your Image URL"
              defaultValue={user.photoURL}
            />
           
            <button className="btn bg-green-600 hover:bg-green-700 text-white w-full rounded-xl font-semibold">
              Save Changes
            </button>
          </form>
        )}

     
        {success && (
          <p className="mt-3 text-green-600 font-medium text-center">{success}</p>
        )}
        {error && (
          <p className="mt-3 text-red-600 font-medium text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Profile;


