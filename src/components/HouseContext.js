import React, { useState, useEffect, createContext } from "react";

// import data
import { housesData } from "../data";

//create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Locais (todos)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Propriedades (todos)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState(" Preços (todos)");
  const [loading, setLoading] = useState(false);

  //return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    // remove duplicates states
    const uniqueCountries = ["Locais (todos)", ...new Set(allCountries)];

    //set countries state
    setCountries(uniqueCountries);
  }, []);

  //return all properties (FILTRA)
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    //remove duplicate property
    const uniqueProperty = ["Propriedades (todos)", ...new Set(allProperties)];

    //return property type
    setProperties(uniqueProperty);
  }, []);

  //click search/filter
  const handleClick = () => {
    //set loading
    setLoading(true);

    //function that checks if the string includes '(todos)'
    const isDefault = (str) => {
      return str.split(" ").includes("(todos)");
    };

    //get first value of price and parse it to number
    const minPrice = parseInt(price.split(" ")[0]);

    //get second of price which is the maximum price  and parse it to number
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      //if all values are selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      //if all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      //if country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      //if property is not default
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }

      //if price is not default
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (house.price >= minPrice && house.price <= maxPrice) return house;
      }

      //if country and property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      //if country and price is not default
      if (!isDefault(country) && !isDefault(price) && isDefault(property)) {
        if (house.price >= minPrice && house.price <= maxPrice) {
          return house.country === country;
        }
      }

      //if property and price is not default
      if (isDefault(country) && !isDefault(price) && !isDefault(property)) {
        if (house.price >= minPrice && house.price <= maxPrice) {
          return house.type === property;
        }
      }
    });

    //prints only the cards corresponding to the search
    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),//**
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        loading,
        houses,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
