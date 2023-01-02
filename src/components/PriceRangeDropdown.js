import React, { useContext, useState } from "react";

//import icons
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";

//import headless ui
import { Menu } from "@headlessui/react";

//import house context
import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: "Preços (todos)",
    },
    {
      value: "10.000 - 99.000",
    },
    {
      value: "99.000 - 130.000",
    },
    {
      value: "130.000 - 160.000",
    },
    {
      value: "160.000 - 190.000",
    },
    {
      value: "190.000 - 220.000",
    },
    {
      value: "220.000 - 550.000",
    },
    {
      value: "550.000 - 1.000.000",
    },
  ];

  return (
    <Menu as="div" className="price-range dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{price}</div>
          <div className="text-[13px]">Selecione o Valor</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary justify-end" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary justify-end" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => setPrice(price.value)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              R$ {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
