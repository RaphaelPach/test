import React from "react";

function About() {
  return (
    <div
      name="sobre mim"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-start h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-900">
            About
          </p>
        </div>
        <div className="text-xl">
          <p className="mb-4">
            Acredito que não seja possível falar sobre mim sem mencionar minha
            paixão pela ficção científica. Esse gênero está intrinsecamente
            ligado a todas as decisões que tomo na vida, de forma inconsciente.
            Sou uma pessoa ansiosa e, de certa forma, a especulação sobre um
            futuro inexistente é algo natural para mim. Por isso, acredito
            firmemente que a ficção científica é algo reconfortante em minha
            vida. Ao explorar esse gênero, deparei-me com questões fascinantes,
            como o que define uma máquina como um ser vivo, a insignificância do
            planeta Terra em relação ao vasto universo, grupos de caçadores de
            recompensas fugindo de seus próprios passados, histórias em que não
            se sabe se o personagem pertence ao passado ou ao futuro, máquinas
            que preservam a essência de uma pessoa segundos antes de sua morte,
            apenas para manter o contato com entes queridos, e até mesmo a
            descoberta de civilizações espaciais. Enfim, há inúmeros temas que
            poderiam ser mencionados aqui, mas o que importa é perceber como a
            ficção científica me introduziu, sem que eu notasse, a área da
            tecnologia.
          </p>
          <br />
          <p className="mb-4">
            Olá! Agora vou falar um pouco sobre mim. Sou o Raphael Pacheco,
            tenho 28 anos e sou apaixonado por cinema. Em casa, tenho três
            cachorrinhos adoráveis. Atualmente, estou enfrentando um dos
            momentos mais desafiadores e instigantes da minha vida, pois estou
            mudando de carreira e aprendendo coisas completamente novas. Apesar
            dos desafios, essas experiências têm sido enriquecedoras e de
            aprendizado constante. Como desenvolvedor web FullStack, tenho
            conhecimentos em frontend e backend. Já trabalhei em projetos que
            abrangem desde os conceitos fundamentais do JavaScript até o uso do
            React e a construção de tabelas no MySQL. Você pode conferir alguns
            desses projetos no meu GitHub (link ao lado). Este portfólio foi
            criado com o objetivo de reforçar os conceitos essenciais do React,
            aprender a utilizar o TailWind e, acima de tudo, entrar em contato
            com empresas e fazer novas amizades. Agradeço muito a você que leu
            até aqui. Obrigado!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
