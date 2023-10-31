import React from "react";
import "./../index.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navs = [
    { title: "Home", link: "" },
    { title: "About", link: "about" },
    { title: "Projects", link: "projects" },
    { title: "Contacts", link: "contacts" },
  ];
  return (
    <div>
      <div className="container mx-auto relative">
        <div className="absolute flex flex-row justify-between w-full text-white">
          <div className="number flex">
            <div className="px-6 my-5 mx-5 font-bold text-4xl">Portfolio!</div>
          </div>
          <div className="navigation flex flex-row">
            {navs.map((nav) => (
              <NavLink
                to={nav.link}
                className="mx-12 p-1 my-6 font-bold text-xl cursor-pointer"
              >
                {nav.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
