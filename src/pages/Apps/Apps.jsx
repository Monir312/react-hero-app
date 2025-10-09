import React, { Suspense } from 'react';
import App from '../App/App';
import { Link } from 'react-router';

const Apps = ({ data }) => {
  return (
    <div>
      <h1 className='text-4xl text-center p-4 mt-6 font-bold'>Trending Apps</h1>
      <p className='text-center mb-4'>Explore All Trending Apps on the Market developed by us</p>
      <Suspense fallback={<span>Loading......</span>}>
        <div className='mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          {
            data.map((singleApp) => <App key={singleApp.id} singleApp={singleApp}></App>)
          }
        </div>
      </Suspense>
      <Link to='/apps'>
        <div className="flex justify-center mt-4 mb-4">
          <button className="flex items-center justify-center px-6 py-3 text-white font-semibold text-lg rounded-xl shadow-lg bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-800 hover:to-purple-600 transition-colors duration-300">
            Show All
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Apps;