import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaHamburger, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "sobre mim",
    },
    {
      id: 3,
      link: "experiências",
    },
    {
      id: 4,
      link: "portfólio",
    },
    {
      id: 5,
      link: "contato",
    },
  ];

  return (
    <div
      className="flex justify-between items-center w-full h-20
     px-4 text-white bg-black fixed z-50"
    >
      <div className="text-5xl font-extralight ml-2">CHECO</div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-bold
          text-gray-500 hover:scale-105 duration-200 text-lg"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setShowMenu(!showMenu)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {showMenu ? <FaTimes size={30} /> : <FaHamburger size={30} />}
      </div>
      {showMenu && (
        <ul
          className="flex flex-col justify-center items-center absolute
      top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
