import React, { useState, useEffect } from "react";
import "./style.scss";
import logo from "../../assets/movix-logo.svg";
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="menuItems">
        <li className="menuItem">Movies</li>
        <li className="menuItem">TV Shows</li>
        <li className="menuItem">
          <HiOutlineSearch />
        </li>
      </ul>
    </header>
  );
};

export default Header;
