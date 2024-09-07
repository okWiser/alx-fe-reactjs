import React from 'react';

const UserProfile = () => {
  return (
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img
        src="your-image-url.jpg"
        alt="User Profile"
        className="rounded-full w-36 h-36 mx-auto"
      />
      <h1 className="text-xl text-blue-800 my-4">Your Name</h1>
      <p className="text-gray-600 text-base">Your description goes here.</p>
    </div>
  );
};

export default UserProfile;
