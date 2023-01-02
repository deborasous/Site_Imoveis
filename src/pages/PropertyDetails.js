import React from "react";

//import data
import { housesData } from "../data";

//import params
import { useParams } from "react-router-dom";

// import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";

//import link
import { Link } from "react-router-dom";

const PropertyDetails = () => {
  //get the house id
  const { id } = useParams();

  //get the house based on id
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });
  console.log(id);
  console.log(house);
  return (
    <section>
      <div className="property-details container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{house.name}</h2>
            <h3 className="text-lg mb-4">{house.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-green-500 text-white px-3 rounded-full text-center">
              {house.type}
            </div>
            <div className="bg-violet-500 text-white px-3 rounded-full text-center">
              {house.country}
            </div>
          </div>
          <div className="text-3xl text-violet-700 font-semibold">
            {house.price}
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px] ">
            <div className="mb-8">
              <img src={house.imageLg} alt={house.description} />
            </div>
            <div className="flex gap-x-6 mb-6 text-violet-700">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl " />
                <div>{house.bedrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center ">
                <BiBath className="text-2xl " />
                <div>{house.bathrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center ">
                <BiArea className="text-2xl " />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg  px-6 py-8">
            <div className="flex gap-x-4 mb-8 items-center">
              <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                <img src={house.agent.image} alt={house.agent.name} />
              </div>
              <div className="text-lg font-bold">
                <div>{house.agent.name}</div>
                <Link to="" className="text-violet-700 text-sm ">
                  Ver Lista
                </Link>
              </div>
            </div>
            <form className="flex flex-col gap-4">
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded-md w-full px-3 py-2 text-base"
                type="text"
                placeholder="Nome *"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded-md w-full px-3 py-2 text-base"
                type="text"
                placeholder="E-mail *"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded-md w-full px-3 py-2 text-base"
                type="text"
                placeholder="Telefone *"
              />
              <textarea
                className="border border-gray-300 focus:border-violet-700 outline-none rounded-md w-full h-[250px] px-3 py-2 text-gray-400"
                placeholder="Escreva sua mensagem"
                defaultValue={
                  "Olá, estou interessado(a) em um [apartamento moderno]"
                }
              ></textarea>
              <div className="flex gap-x-2">
                <button className="bg-violet-700 hover:bg-violet-500 transition rounded-md  text-lg font-medium text-white px-5 py-3 w-full">
                  Enviar
                </button>
                <button className="border border-violet-700 rounded-md hover:bg-violet-500 hover:border-violet-500 hover:text-white transition text-lg font-medium  text-violet-700 px-5 py-3 w-full">
                  Chamar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
