import React from "react";

//import Links
import { Link } from "react-router-dom";

//import logo
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="header-nav py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="HomeLand" />
        </Link>
        {/* buttons */}
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-violet-900 transition">
            Entrar
          </Link>
          <Link to="/" className="bg-violet-700 hover:bg-violet-800 text-white rounded-lg px-4 py-3 transition">
            Inscrever-se
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
