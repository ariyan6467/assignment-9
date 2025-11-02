import React from 'react';
import { NavLink } from 'react-router';
import { FaFacebook } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaSquareXTwitter } from "react-icons/fa6";
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
<li><NavLink to="https://web.programming-hero.com/" className="hover:underline">About</NavLink></li>
<li><NavLink to="https://chatgpt.com/" className="hover:underline">Contact</NavLink></li>
<li><NavLink to="https://grok.com/" className="hover:underline">Privacy Policy</NavLink></li>
</ul>
</div>


{/* Social Icons */}
<div className="mt-6 md:mt-0">
<h3 className="font-semibold text-lg mb-3">Follow Us</h3>
<div className="flex gap-4">
<a href="#" className="hover:opacity-75">
<FaFacebook />
</a>
<a href="#" className="hover:opacity-75">
<LuInstagram />
</a>
<a href="#" className="hover:opacity-75">
<FaSquareXTwitter />
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