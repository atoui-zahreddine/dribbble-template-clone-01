import React, { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import {
  AiOutlineFolder,
  AiOutlineSetting,
  AiOutlineBell,
} from "react-icons/ai";

import { FiMessageCircle } from "react-icons/fi";

import "./Nav.css";

const Nav = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const data = [
    BiHomeAlt,
    AiOutlineFolder,
    AiOutlineBell,
    FiMessageCircle,
    AiOutlineSetting,
  ];

  return (
    <nav className="App-header-nav">
      <ul className="nav-items">
        {data.map((Component, index) => (
          <NavItem
            key={index}
            selected={selectedItem === index}
            onClick={() => setSelectedItem(index)}
          >
            <Component />
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

const NavItem = (props) => {
  return (
    <li
      onClick={props.onClick}
      className={`nav-item ${props.selected ? "active" : ""}`}
    >
      <a href="#">{props.children}</a>
    </li>
  );
};
export default Nav;
