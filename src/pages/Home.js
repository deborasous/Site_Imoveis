import React from "react";

//import components
import Banner from "../components/Banner";
import HouseList from '../components/HouseList'
const Home = () => {
  return (
    <main>
      <div className="min-h-[1800px] ">
        <Banner />
        <HouseList />
      </div>
    </main>
  );
};

export default Home;
