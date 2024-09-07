import React from 'react';

const UserProfile = () => {
  return (
    <div className="bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src="your-image-url.jpg"
        alt="User Profile"
        className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h1 className="text-lg sm:text-xl md:text-xl text-blue-800 my-4 hover:text-blue-500 transition-colors duration-300 ease-in-out">Your Name</h1>
      <p className="text-sm sm:text-base text-gray-600">Your description goes here.</p>
    </div>
  );
};

export default UserProfile;
