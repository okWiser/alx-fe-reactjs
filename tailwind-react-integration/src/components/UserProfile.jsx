import React from 'react';

const UserProfile = () => {
  return (
    <div className="bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img
        src="your-image-url.jpg"
        alt="User Profile"
        className="rounded-full w-24 h-24 sm:w-36 sm:h-36 mx-auto"
      />
      <h1 className="text-lg sm:text-xl md:text-xl text-blue-800 my-4">Your Name</h1>
      <p className="text-sm sm:text-base text-gray-600">Your description goes here.</p>
    </div>
  );
};

export default UserProfile;
