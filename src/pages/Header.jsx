import React from "react";
import NavListItem from "../components/NavListItem";
import navListData from "../data/navListData";
import Search from "../components/Search";
import { PiSignInFill } from "react-icons/pi";

import "./header.css";
import Button from "../components/Button";
const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        Cinema
      </a>
      <ui className="nav">
        {navListData.map((nav) => (
          <NavListItem key={nav.id} nav={nav} />
        ))}
      </ui>
      <Search />
      <Button icon={<PiSignInFill />} name="Sign in" />
    </header>
  );
};

export default Header;
