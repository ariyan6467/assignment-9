import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
       <div className="max-w-sm mx-auto bg-white shadow-xl rounded-xl p-6">
  <div className="flex flex-col items-center">
    <img
      className="w-28 h-28 rounded-full object-cover border"
      src={user.photoURL}
      alt="profile"
    />

    <h2 className="text-2xl font-semibold mt-3">{user.displayName}</h2>
    <p className="text-gray-600">{user.
email}</p>

    <button className="btn btn-neutral mt-4 rounded-xl w-full">
      Update Profile
    </button>
  </div>
</div>

    );
};

export default Profile;