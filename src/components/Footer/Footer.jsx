import React from 'react';
import LogoImg from '../../assets/logo.png';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router';



const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto flex justify-between items-center mb-6">

        <Link to="/">
          <div className="flex items-center space-x-2">
            <img className='w-[30px]' src={LogoImg} alt="" />
            <span className="text-white font-bold text-lg tracking-wider">
              HERO.IO
            </span>
          </div>
        </Link>

        <div className="flex flex-col items-end">
          <span className="text-sm text-white mb-2">
            Social Links
          </span>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-200 rounded-2xl hover:text-black transition duration-200">
              <FaXTwitter />
            </a>
            <a href="#" className="p-2 bg-gray-200 rounded-2xl hover:text-black transition duration-200">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 bg-gray-200 rounded-2xl hover:text-black transition duration-200">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      <hr className="max-w-7xl mx-auto border-gray-700 mb-6" />

      <div className="text-center text-sm">
        <p>
          Copyright &copy; 2025 - All right reserved.
        </p>
      </div>
    </footer>
  );
};


export default Footer;