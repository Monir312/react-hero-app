import React from 'react';
import { FaGooglePlay  } from "react-icons/fa6";
import { IoLogoAppleAppstore } from "react-icons/io5";
import BannerImg from '../../assets/hero.png';

const Banner = () => {
  return (
    <div>
      <section className="pt-20 bg-gray-50 flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#001931] leading-tight mb-6">
            We Build <br /><span className="bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-800 hover:to-purple-600 bg-clip-text text-transparent transition-colors duration-300">Productive</span> Apps
          </h1>

          <p className="text-base md:text-lg text-[#627382] mb-10 max-w-3xl mx-auto">
            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
            Our goal is to turn your ideas into digital experiences that truly make an impact.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://play.google.com/store/apps/" target="_blank" rel="noopener noreferrer"
              className="flex items-center bg-white border border-gray-300 rounded-lg shadow-sm px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-300" >
              <FaGooglePlay  className="w-6 h-6 mr-2 text-[#0BDF74]"></FaGooglePlay >
              <span className="font-semibold text-[20px] text-[#001931]">Google Play</span>
            </a>

            <a href="https://apps.apple.com/app/"  target="_blank" rel="noopener noreferrer"
              className="flex items-center bg-white border border-gray-300 rounded-lg shadow-sm px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-300" >
              <IoLogoAppleAppstore  className="w-6 h-6 mr-2 text-blue-600" ></IoLogoAppleAppstore >
              <span className="font-semibold text-[20px] text-[#001931]">App Store</span>
            </a>
          </div>
        </div>
        <img className='mt-10' src={BannerImg} alt="" />
      </section>

      <div
      className="
        bg-gradient-to-r from-purple-700 to-purple-500
        py-16 md:py-24 lg:py-32
        text-white
        flex flex-col items-center justify-center
        overflow-hidden
      "
    >
      <div className="max-w-6xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-16 md:mb-20 lg:mb-24">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 md:gap-x-8 lg:gap-x-16">
          <div className="flex flex-col items-center">
            <p className="text-base text-gray-200 mb-2">Total Downloads</p>
            <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2">29.6M</p>
            <p className="text-sm text-gray-300">21% More Than Last Month</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-base text-gray-200 mb-2">Total Reviews</p>
            <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2">906K</p>
            <p className="text-sm text-gray-300">46% More Than Last Month</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-base text-gray-200 mb-2">Active Apps</p>
            <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2">132+</p>
            <p className="text-sm text-gray-300">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;