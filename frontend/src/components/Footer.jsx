import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Handcrafted pure cotton sarees from the skilled weavers of West
            Bengal — designed for elegance, comfort, and the modern woman.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to="/" className="hover:underline cursor-pointer">
              Home
            </Link>
            <Link to="/about" className="hover:underline cursor-pointer">
              About us
            </Link>
            <Link to="/contact" className="hover:underline cursor-pointer">
              Contact
            </Link>
            <Link to="/policy" className="hover:underline cursor-pointer">
              Privacy policy
            </Link>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 9022509318</li>
            <li>Priyaloomsofficial@gamil.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 priyalooms.in - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
