import React from "react";

const date = new Date();
let monthName = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date);
console.log('-->', monthName);
const monthNames = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];
const formattedDate = `${date.getDate()} de ${monthName} de ${date.getFullYear()}`;

function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm font-bold">
          <span>&copy; Raphael Pacheco</span>
          <span className="text-gray-500">- Todos os direitos reservados</span>
        </div>
        <div className="text-sm font-bold">
          <span>WhatsApp:</span>
          <span className="mr-2 font-mono">
            <a href="https://wa.me/5579999035189">(79) 99903-5189</a>
          </span>
        </div>
        <div className="text-sm font-bold">
          <span>{formattedDate}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
