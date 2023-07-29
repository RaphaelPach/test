import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import yoji from "../assets/yojimbo.jpg";
import chihiro from "../assets/spirited.jpg";
import blade from "../assets/runner.jpg";
import clint from "../assets/madson.jpg";
import last from "../assets/last.jpg";
import lost from "../assets/translation.jpg";
import solaris from "../assets/solar.png";
import spider from "../assets/magire.jpg";
import akiras from "../assets/kaneda.jpg";
import bad from "../assets/mclovin.png";

export default () => {
  const movies = [
    { id: 1, title: "Yojimbo - O Guarda-Costas (1961)", img: yoji },
    { id: 2, title: "As viagens de Chihiro (2001)", img: chihiro },
    { id: 3, title: "Blade Runner (1982)", img: blade },
    { id: 4, title: "As Pontes de Madison (1995)", img: clint },
    { id: 5, title: "Star Wars: The Last Jedi (2017)", img: last },
    { id: 6, title: "Lost in Translation (2005)", img: lost },
    { id: 7, title: "Solaris (1972)", img: solaris },
    { id: 8, title: "Homem-Aranha 2 (2002)", img: spider },
    { id: 9, title: "Akira (1988)", img: akiras },
    {
      id: 10,
      title: "SuperBad (2007)",
      img: bad,
    },
  ];

  return (
    <div className="w-full flex justify-center items-center bg-gradient-to-b from-gray-800 to-[rgb(30,40,54)] min-h-screen">
      <div className="flex justify-center items-center max-w-6xl min-h-screen bg-gradient-to-b from-gray-800 to-[rgb(30,40,54)] text-white">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          slidesPerGroup={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="w-full max-w-4xl"
        >
          {movies.map(({ id, title, img }) => (
            <SwiperSlide key={id} className="w-full">
              <div className="rounded-lg shadow-md bg-white overflow-hidden min-h-fit">
                {/*     <img
                  src={img}
                  alt={title}
                  className="h-96 w-full object-cover mx-auto"
                /> */}
                <div
                  className="bg-cover bg-center h-[500px] w-full"
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
              </div>
              <div className="p-4">
                <h1 className="text-xl md:text-2xl font-bold mb-2">{title}</h1>
                {/* Adicione qualquer outro conteúdo adicional aqui, se necessário */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
