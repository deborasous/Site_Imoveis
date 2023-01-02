import React, { useContext } from "react";

//import image search not found
import ImageNotFound from '../assets/searchNotFound.svg'

//import context
import { HouseContext } from "./HouseContext";

//import components
import House from "./House";

// import link
import { Link } from "react-router-dom";

//import icons
import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <ImSpinner2 className="max-auto animate-spin text-violet-700 text-4xl mt-[200px] mx-auto" />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="house-list text-center text-3xl pt-20 text-gray-400">
        Desculpe, <br /> não temos propriedades disponíveis para esta pesquisa
        <img
          className="imageNotFound"
          src={ImageNotFound}
          alt="Resultado não disponível para essa pesquisa"
        />
      </div>
    );
  }

  return (
    <section className="mb-20">
      <div className="container max-auto mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
