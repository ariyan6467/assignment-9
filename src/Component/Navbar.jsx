import React from 'react';
import { NavLink } from 'react-router';


const Navbar = () => {
    return (
        <header className="bg-white shadow-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                GN
              </div>
              <span className="font-semibold text-lg text-gray-800">GreenNest</span>
            </NavLink>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-4">
            <NavLink to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">Home</NavLink>
            <NavLink to="/plants" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">Plants</NavLink>
            <NavLink to="/profile" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">My Profile</NavLink>
          </nav>

          {/* Right side UI only */}
          <div className="hidden md:flex items-center gap-2">
            {/* logged out state UI example */}
            
        <NavLink to="/login">
                <button className="px-3 py-2 rounded-md text-sm font-medium border hover:bg-gray-50">Login</button>
        </NavLink>
          <NavLink to="/register">
              <button className="px-3 py-2 rounded-md text-sm font-medium border hover:bg-green-700">Register</button>
          </NavLink>
            <img src="https://tse1.explicit.bing.net/th/id/OIP.hGSCbXlcOjL_9mmzerqAbQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" className='w-[40px] mx-3' alt="" srcset="" />
          </div>

          {/* mobile menu icon */}
          <button className="md:hidden p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
    );
};

export default Navbar;

