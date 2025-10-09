import React from 'react';
import ErrorImg from '../../assets/error-404.png';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 font-sans">
      <div className="text-center max-w-sm sm:max-w-md">
        <img src={ErrorImg} alt="" />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
          Oops, page not found!
        </h1>
        <p className="text-base text-gray-500 mb-8">
          The page you are looking for is not available.
        </p>

        <button
          className="px-8 py-3 text-lg font-semibold text-white bg-purple-600 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300">
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;