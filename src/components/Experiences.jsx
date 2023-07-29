import React from "react";
import reactImage from "../assets/reactImage.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import vuejs from "../assets/vuejs.png";
import typescript from "../assets/typescript.png"
import dockerdeb1 from "../assets/dockerdeb1.png"

function Experiences() {
  const techs = [
    {
      id: 1,
      src: reactImage,
      title: "React",
      style: "shadow-purple-900",
    },
    {
      id: 2,
      src: html,
      title: "HTML",
      style: "shadow-purple-900",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-purple-900",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-purple-900",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-purple-900",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-purple-900",
    },
    {
      id: 7,
      src: vuejs,
      title: "Vue.js",
      style: "shadow-purple-900",
    },
    {
      id: 8,
      src: typescript,
      title: "Typescript",
      style: "shadow-purple-900",
    },
    {
      id: 9,
      src: dockerdeb1,
      title: "Docker",
      style: "shadow-purple-900",
    },
  ];

  return (
    <div name="experiências" className="bg-gradient-to-b to-gray-800 from-black w-full min-h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-purple-900 p-2 inline">
            Experiências
          </p>
          <p className="py-6">Estas são as tecnologias com as quais trabalhei</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-4 sm:px-12">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover-scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiences;