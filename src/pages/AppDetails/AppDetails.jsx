import React from 'react';
import { useLoaderData } from 'react-router';
import { FaDownload, FaStar, FaRegCommentDots } from "react-icons/fa6";

const AppDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { title, image, ratings, size, downloads, description } = data;

  const totalRatings = ratings.reduce((sum, r) => sum + r.count, 0);
  const weightedSum = ratings.reduce((sum, r) => sum + parseInt(r.name) * r.count, 0);
  const avgRating = (weightedSum / totalRatings).toFixed(1);
  // const { bookName, image} = singleApp;
  return (

    <div className="flex flex-col p-8 px-10 mx-auto bg-gray-100 rounded-xl shadow-lg">

      <div className='flex'>
        <div className="flex-shrink-0 mr-6">
          <div className="w-28 h-28 bg-gray-300 rounded-lg flex items-center justify-center ">
            <img src={image} alt={title} />
          </div>
        </div>

        <div>
          <h1 className="text-3xl bg-gr font-bold text-[#001931]">{title}</h1>
          <p className="text-sm mt-1 text-[#627382]">Developed by <span className="text-gray-600 font-semibold bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-800 hover:to-purple-600 bg-clip-text text-transparent transition-colors duration-300">productive.io</span></p>

          <div className="flex space-x-8 mt-6 items-center">

            <div className="flex flex-col items-center">
            <FaDownload className="text-green-500 mb-1 text-xl" />
              <p className="text-lg text-[40px] font-extrabold text-[#001931]">{downloads}</p>
              <p className="text-[#001931] text-[16px]">Downloads</p>
            </div>

            <div className="w-px h-12 bg-gray-200 hidden md:block"></div>

            <div className="flex flex-col items-center">
            <FaStar className="text-yellow-500 mb-1 text-xl" />
              <p className="text-lg text-[40px] font-extrabold text-[#001931]">{avgRating}</p>
              <p className="text-[#001931] text-[16px]">Average Ratings</p>
            </div>

            <div className="w-px h-12 bg-gray-200 hidden md:block"></div>

            <div className="flex flex-col items-center">
            <FaRegCommentDots className="text-purple-600 mb-1 text-xl" />
              <p className="text-lg text-[40px] font-extrabold text-[#001931]">{totalRatings.toLocaleString()}</p>
              <p className="text-[#001931] text-[16px]">Total Reviews</p>
            </div>
          </div>

          <button className="mt-8 px-6 py-2 text-white font-semibold bg-green-500 rounded-lg hover:bg-green-600 transition duration-150">
            Install Now <span className="text-sm ml-1">{size}MB</span>
          </button>
        </div>
      </div>


      <div>
        Barchart
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-bold text-[#627382] mb-2">Description</h2>
        <p className="text-gray-600 text-justify leading-relaxed">
          {description || 'No description available for this app.'}
        </p>
      </div>

    </div>


  );
};

export default AppDetails;