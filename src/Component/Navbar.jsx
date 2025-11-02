import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../auth/AuthProvider";

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const signOut = () => {
    handleSignOut()
      .then(res => console.log(res.user))
      .catch(error => console.error(error.message));
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
              GN
            </div>
            <span className="font-semibold text-lg text-gray-800">GreenNest</span>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-4">
            <NavLink to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">Home</NavLink>
            <NavLink to="/plants" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">Plants</NavLink>
            <NavLink to="/profile" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">My Profile</NavLink>
          </nav>

          {/* Right side UI */}
          {user ? (
            <div className="dropdown dropdown-end hidden md:flex">
              <div tabIndex={0} className="btn m-1 border-0 bg-green-300 rounded-xl flex items-center gap-2">
                <img
                  src={user?.photoURL || "https://tse1.explicit.bing.net/th/id/OIP.hGSCbXlcOjL_9mmzerqAbQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"}
                  className="w-[30px] rounded-full"
                  alt=""
                />
                ⬇️
              </div>
              <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li>{user.displayName}</li>
                <li>
                  <button onClick={signOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <NavLink to="/login">
                <button className="px-3 py-2 rounded-md text-sm font-medium border hover:bg-gray-50">Login</button>
              </NavLink>
              <NavLink to="/register">
                <button className="px-3 py-2 rounded-md text-sm font-medium border hover:bg-green-700">Register</button>
              </NavLink>
            </div>
          )}

          {/* Mobile menu icon */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden  px-2 pt-2 pb-3 space-y-1 bg-white shadow-md">
            <div tabIndex={0} className="btn m-1 w-fit border-0 rounded-xl flex items-center gap-2">
                <img
                  src={user?.photoURL || "https://tse1.explicit.bing.net/th/id/OIP.hGSCbXlcOjL_9mmzerqAbQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"}
                  className="w-[60px] rounded-full"
                  alt=""
                />
               
              </div>
          <NavLink
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/plants"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Plants
          </NavLink>
          <NavLink
            to="/profile"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            My Profile
          </NavLink>

          {/* Mobile login/logout */}
          {user ? (
            <button
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium border hover:bg-gray-100"
              onClick={() => { signOut(); setMobileMenuOpen(false); }}
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink to="/login" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium border hover:bg-gray-50">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium border hover:bg-green-700">
                  Register
                </button>
              </NavLink>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
