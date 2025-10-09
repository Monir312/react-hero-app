import React from 'react';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router';

const AllApp = ({allappdata}) => {
  const {id, title, image, ratings } = allappdata;

  const totalRatings = ratings.reduce((sum, r) => sum + r.count, 0);

  const weightedSum = ratings.reduce((sum, r) => {
    const starValue = parseInt(r.name);
    return sum + starValue * r.count;
  }, 0);

  const avgRating = (weightedSum / totalRatings).toFixed(2); 

  return (
    <Link to={`/appDetails/${id}`}>
    <div className="rounded-lg overflow-hidden shadow-lg bg-white p-2">

      <div className="text-center h-[200px]">
        <img className="inline-block h-full" src={image} alt="" />
      </div>

      <div className="px-1 py-1">
        <div className="font-sans text-lg font-semibold text-gray-800 leading-snug">
          {title}
        </div>
      </div>

      <div className="flex justify-between items-center mt-2 px-1 pb-1">
        <div className="flex items-center bg-green-50 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
        <FaDownload className='mr-1'></FaDownload>
          9M
        </div>

        <div className="flex items-center bg-orange-50 text-orange-600 text-base font-bold px-3 py-1 rounded-full">
        <FaStar className='mr-1'></FaStar>
          {avgRating}
        </div>
      </div>
    </div>
    </Link>
  );
};

export default AllApp;