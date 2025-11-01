import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-green-600 text-white mt-20 py-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


{/* Top Section */}
<div className="flex flex-col md:flex-row justify-between mb-10">


{/* Quick Links */}
<div>
<h3 className="font-semibold text-lg mb-3">Quick Links</h3>
<ul className="space-y-2 text-sm">
<li><NavLink to="/about" className="hover:underline">About</NavLink></li>
<li><NavLink to="/contact" className="hover:underline">Contact</NavLink></li>
<li><NavLink to="/privacy" className="hover:underline">Privacy Policy</NavLink></li>
</ul>
</div>


{/* Social Icons */}
<div className="mt-6 md:mt-0">
<h3 className="font-semibold text-lg mb-3">Follow Us</h3>
<div className="flex gap-4">
<a href="#" className="hover:opacity-75">
<i className="fa-brands fa-instagram text-2xl"></i>
</a>
<a href="#" className="hover:opacity-75">
<i className="fa-brands fa-facebook text-2xl"></i>
</a>
<a href="#" className="hover:opacity-75">
<i className="fa-brands fa-pinterest text-2xl"></i>
</a>
</div>
</div>
</div>


{/* Bottom Text */}
<p className="text-center text-sm opacity-80">
© 2025 GreenNest. All rights reserved.
</p>


</div>
</footer>
    );
};

export default Footer;