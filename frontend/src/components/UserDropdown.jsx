import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserDropdown = ({ onEditProfile, onLogout }) => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
      <Link 
        to="/profile" 
        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        View Profile
      </Link>
      <button 
        onClick={onEditProfile}
        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Edit Profile
      </button>
      <Link 
        to="/settings" 
        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Settings
      </Link>
      <hr className="my-1 border-gray-200" />
      <button
        onClick={onLogout}
        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-medium"
      >
        Log Out
      </button>
    </div>
  );
};

export default UserDropdown;