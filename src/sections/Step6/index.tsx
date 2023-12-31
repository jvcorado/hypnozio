/* import CommonPage from "../../components/Page";
import { useState } from "react";

export const Step1 = () => {
  const info = [
    {
      step: 1,
      pergunta: "Qual é a sua idade?",
      opcoes: [
        {
          text: "18-21",
          emoji: "",
        },
        {
          text: "21-30",
          emoji: "",
        },
        {
          text: "31-40",
          emoji: "",
        },
        {
          text: "41-50",
          emoji: "",
        },
        {
          text: "51-60",
          emoji: "",
        },
        {
          text: "61-70",
          emoji: "",
        },
        {
          text: "Mais de 70",
          emoji: "",
        },
      ],
    },
  ];

  return (
    <>
      {info.map((item) => (
        <CommonPage
          key={item.step}
          step={item.step}
          pergunta={item.pergunta}
          opcoes={item.opcoes}
          isLink={true}
        />
      ))}
    </>
  );
};
 */
/* 
import { Header } from "../../components/Header"; */
import { Link, useParams, useLocation } from "react-router-dom";
import { Header } from "../../components/Header";

export const Step6 = () => {
  const { idade } = useParams();

  const location = useLocation();

  // Extrai o valor do parâmetro 'src' da URL atual
  const queryString = location.search;
  const parametro = queryString.substring(queryString.indexOf("src="));

  return (
    <section className="flex flex-col h-full md:h-screen ">
      <Header inicio="21.75%" final="26.5%" />
      <div className="container m-auto flex flex-col items-center my-10 gap-7 px-8 md:px-5 ">
        <div className="w-full md:w-[60%] xl:w-[50%] 2xl:w-[30%]  flex flex-col items-start gap-5">
          <h1 className="text-2xl md:text-xl !leading-[30px] text-start text-black w-full">
            Sabemos que os motivos do excesso de peso de cada pessoa são únicos.
            Quais são os seus?
          </h1>
          <p>Selecione a sua opção:</p>

          <div className="w-full flex flex-col items-center justify-center gap-4">
            <Link
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              to={`/step/7/${idade}/1/?${parametro}`}
              className="w-full bg-[#ffffff] py-[16px] px-[24px] rounded-lg border  border-[#8aa8fcab] flex items-center justify-between hover:shadow-2xl hover:border-[#00000083]"
            >
              <div className="flex items-center gap-5">
                <p className="text-base leading-5">Comer emocional</p>
              </div>
            </Link>
            <Link
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              to={`/step/7/${idade}/2/?${parametro}`}
              className="w-full bg-[#ffffff] py-[16px] px-[24px] rounded-lg border  border-[#8aa8fcab] flex items-center justify-between hover:shadow-2xl hover:border-[#00000083]"
            >
              <div className="flex items-center gap-5">
                <p className="text-base leading-5">Compulsão alimentar</p>
              </div>
            </Link>
            <Link
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              to={`/step/7/${idade}/3/?${parametro}`}
              className="w-full bg-[#ffffff] py-[16px] px-[24px] rounded-lg border  border-[#8aa8fcab] flex items-center justify-between hover:shadow-2xl hover:border-[#00000083]"
            >
              <div className="flex items-center gap-5">
                <p className="text-base leading-5">Dieta crônica</p>
              </div>
            </Link>
            <Link
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              to={`/step/7/${idade}/4/?${parametro}`}
              className="w-full bg-[#ffffff] py-[16px] px-[24px] rounded-lg border  border-[#8aa8fcab] flex items-center justify-between hover:shadow-2xl hover:border-[#00000083]"
            >
              <div className="flex items-center gap-5">
                <p className="text-base leading-5">Má digestão</p>
              </div>
            </Link>
            <Link
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              to={`/step/7/${idade}/5/?${parametro}`}
              className="w-full bg-[#ffffff] py-[16px] px-[24px] rounded-lg border  border-[#8aa8fcab] flex items-center justify-between hover:shadow-2xl hover:border-[#00000083]"
            >
              <div className="flex items-center gap-5">
                <p className="text-base leading-5">Falta de força de vontade</p>
              </div>
            </Link>
            <Link
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              to={`/step/7/${idade}/6/?${parametro}`}
              className="w-full bg-[#ffffff] py-[16px] px-[24px] rounded-lg border  border-[#8aa8fcab] flex items-center justify-between hover:shadow-2xl hover:border-[#00000083]"
            >
              <div className="flex items-center gap-5">
                <p className="text-base leading-5">Não tenho certeza</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
