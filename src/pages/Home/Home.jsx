import React from 'react';
import { useLoaderData } from 'react-router';
import Banner from '../../components/Banner/Banner';

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
    </div>
  );
};

export default Home;