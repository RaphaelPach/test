import React from "react";
import assets from "../assets/Profile.jpg";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col
      items-center justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2
            className="text-4xl sm:text-7xl
           font-bold text-white"
          >
            Olá! Sou um Desenvolvedor Web Full Stack.
          </h2>
          <p className="text-gray-500 py-8 max-w-md">
            Desenvolvedor web full stack com 1 ano de experiência. Apaixonado
            por criar soluções inovadoras e colaborar em equipe. Sempre em busca
            de aprendizado e atualizado com as últimas tecnologias.
          </p>
          <div>
            <a href="public/RaphaelPacheco(atualizado).pdf" download>
              <button
                className="text-white
              py-2 px-4 rounded-md font-bold shadow bg-gradient-to-r
               from-purple-800 to-purple-900 hover:scale-110 duration-300"
              >
                Resume
              </button>
            </a>
          </div>
        </div>
        <div>
          <img
            src={assets}
            alt="my profile"
            className="rounded-2xl w-90 h-90 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
