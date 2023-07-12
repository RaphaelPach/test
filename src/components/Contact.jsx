import React from "react";

function Contact() {
  return (
    <div
      name="contato"
      className="w-full h-screen
          bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div
        className="flex flex-col p-4 justify-center
          max-w-screen-lg mx-auto h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-900">
            Contato
          </p>
          <p className="py-6">Envie o formulário abaixo para entrar em contato comigo</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/63140b24-6d49-4ea7-91d8-e574aed2a7ab"
           method="POST"
           className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2
              rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              className="p-2 my-4 bg-transparent border-2
              rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your messager"
              className="p-2
              bg-transparent border-2 rounded-md text-white
              focus:outline-none"
            ></textarea>
            <button
              className="text-white  bg-purple-900 px-6 py-3 my-8 mx-auto
              flex-items-center rounded-md hover:scale-110 duration-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
