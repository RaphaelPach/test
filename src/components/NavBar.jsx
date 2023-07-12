import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
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
      link: "contato",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20
     px-4 text-white bg-black fixed">
      <div className="text-5xl font-extralight ml-2">CHECO</div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-bold
          text-gray-500 hover:scale-105 duration-200 text-lg"
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
