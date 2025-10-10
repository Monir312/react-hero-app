import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router';
import LogoImg from '../../assets/logo.png'
import './NavLink.css'

const Navbar = () => {
  const links = <>
    <ul className="flex">
      <li className='m-2 font-semibold text-[16px]'>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "active" : undefined}
        >
          Home
        </NavLink>
      </li>
      <li className='m-2 font-semibold text-[16px]'>
        <NavLink 
          to="/apps" 
          className={({ isActive }) => isActive ? "active" : undefined}
        >
          Apps
        </NavLink>
      </li>
      <li className='m-2 font-semibold text-[16px]'>
        <NavLink 
          to="/installation" 
          className={({ isActive }) => isActive ? "active" : undefined}
        >
          Installation
        </NavLink>
      </li>
    </ul>
  </>

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center space-x-2">
              <img className='w-[30px]' src={LogoImg} alt="" />
              <span className="bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-800 hover:to-purple-600 bg-clip-text text-transparent transition-colors duration-300  font-bold text-lg tracking-wider">
                HERO.IO
              </span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a href="https://github.com/Monir312/react-hero-app" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center justify-center px-6 py-3
        text-white font-semibold text-lg rounded-xl shadow-lg bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-800 hover:to-purple-600 transition-colors duration-300">
              <FaGithub className="w-6 h-6 mr-3"></FaGithub>
              Contribute
            </button></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;