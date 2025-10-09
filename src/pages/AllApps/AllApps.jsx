import React, { Suspense, useState } from 'react';
import { useLoaderData } from 'react-router';
import AllApp from '../AllApp/AllApp';

const AllApps = () => {
  const alldata = useLoaderData();
    // console.log(alldata);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredApps = alldata.filter(app =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='mb-5'>
      <h1 className='text-5xl text-center p-4 mt-6 font-bold text-[#001931]'>Our All Applications</h1>
      <p className='text-center mb-4 text-[#627382] text-[20px]'>Explore All Apps on the Market developed by us. We code for Millions</p>
      <div className='flex justify-between items-center mx-4 py-4'>
        <div className="total font-semibold text-[#001931] text-[24px]">{alldata.length} Apps Found</div>
        <div className="search">
          <label className="input">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type='search'
              placeholder='Search apps...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='focus:outline-none w-[200px]'
            />
          </label>
        </div>

      </div>

      <Suspense fallback={<span>Loading......</span>}>
        <div className='mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          {
            filteredApps.map((allappdata) => <AllApp key={allappdata.id} allappdata={allappdata}></AllApp>)
          }
        </div>
      </Suspense>
    </div>
  );
};

export default AllApps;