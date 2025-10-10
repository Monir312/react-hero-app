import React, { useEffect, useState } from 'react';
import { FaDownload, FaStar } from "react-icons/fa6";
import { useInstalledApps } from '../InstalledApps/InstalledAppsContext.jsx';

const Installation = () => {
  const { installedApps, removeApp } = useInstalledApps();
  const [sortedApps, setSortedApps] = useState([]);
  const [sort, setSort] = useState('');

  useEffect(() => {
    setSortedApps(installedApps);
  }, [installedApps]);

  if (installedApps.length === 0) {
    return <p className="text-center mt-10 text-gray-600">No apps installed yet.</p>;
  }

  const handleSort = (e) => {
    const type = e.target.value;
    setSort(type);

    let sorted = [...installedApps];
    if (type === "asc") {
      sorted.sort((a, b) => a.size - b.size);
    } else if (type === "desc") {
      sorted.sort((a, b) => b.size - a.size);
    }
    setSortedApps(sorted);
  };

  return (
    <div className='bg-gray-100 pb-10'>
      <h1 className='text-4xl text-center text-[#001931] pt-8 pb-2 font-bold'>Your Installed Apps</h1>
      <p className='text-center text-[#627382] mt-2 mb-10'>Explore All Trending Apps on the Market developed by us</p>

      <div className="p-4 bg-white rounded-lg mx-8">
        <div className="flex justify-between items-center mb-4 pb-3">
          <h2 className="text-lg font-medium text-gray-800">
            {sortedApps.length} App{sortedApps.length > 1 ? 's' : ''} Found
          </h2>

          <select
            value={sort}
            onChange={handleSort}
            className="border border-gray-300 rounded-md px-3 py-1 text-[#001931] focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="">Sort By Size</option>
            <option value="asc">Small → Large</option>
            <option value="desc">Large → Small</option>
          </select>
        </div>

        {sortedApps.map((app) => (
          <div key={app.title} className="flex items-center justify-between py-2 mt-5">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0">
                <img src={app.image} alt={app.title} className="w-full h-full object-cover rounded-lg" />
              </div>
              <div>
                <p className="text-gray-800 font-semibold text-lg">{app.title}</p>
                <div className="flex items-center text-sm text-gray-500 mt-1 space-x-3">
                  <div className="flex items-center">
                    <FaDownload className="text-green-600 mr-1" />
                    <span className="text-green-600 font-medium">{app.downloads.toLocaleString()}</span>
                  </div>

                  <div className="flex items-center">
                    <FaStar className="text-yellow-500 mr-1" />
                    <span className="font-medium text-yellow-600">{app.ratingAvg}</span>
                  </div>

                  <span>{app.size} MB</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => removeApp(app.title)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-150 ease-in-out"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
