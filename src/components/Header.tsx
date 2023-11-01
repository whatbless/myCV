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
            <NavLink to="/" className="px-6 my-5 mx-5 font-bold text-4xl">
              Portfolio!
            </NavLink>
          </div>
          <div className="navigation lg:flex hidden flex-row">
            {navs.map((nav) => (
              <NavLink
                to={nav.link}
                className="mx-12 p-1 my-6 font-bold text-xl cursor-pointer"
              >
                {nav.title}
              </NavLink>
            ))}
          </div>
          <div className="lg:hidden block burger-menu relative">
            <input id="menu-toggle" type="checkbox" />
            <label className="menu-btn" htmlFor="menu-toggle">
              <span></span>
            </label>

            <ul className="menubox">
              {navs.map((nav) => (
                <li>
                  <NavLink to={nav.link} className="menu-item">
                    {nav.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
