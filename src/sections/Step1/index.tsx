import { Header } from "../../components/Header";
import { Link, useLocation } from "react-router-dom";

export const Step1 = () => {
  const location = useLocation();

  // Extrai o valor do parâmetro 'src' da URL atual
  const queryString = location.search;
  const parametro = queryString.substring(queryString.indexOf("src="));

  return (
    <section className="flex flex-col h-full md:h-screen ">
      <Header inicio="0%" final="4.35%" />
      <div className="container m-auto flex flex-col items-center  overflow-y-auto my-10 gap-7 px-8 md:px-5 ">
        <div className="w-full md:w-[60%] xl:w-[50%] 2xl:w-[30%]  flex flex-col items-start gap-10">
          <h1 className="text-2xl md:text-xl !leading-[30px] text-start text-black w-full">
            Qual é sua idade?
          </h1>

          <div className=" w-full flex flex-col items-center justify-center gap-4">
            <Link
              to={`/step/2/21/?${parametro}`}
              className="w-full bg-[#ffffff] py-[16px] px-[24px] rounded-lg border  border-[#8aa8fcab] flex items-center justify-between hover:shadow-2xl hover:border-[#00000083]"
            >
              <div className="flex items-center gap-5">
                <p className="text-base leading-5">18-21</p>
              </div>
            </Link>
            <Link
              to={`/step/2/30/?${parametro}`}
              className="w-full bg-[#ffffff] py-[16px] px-[24px] rounded-lg border  border-[#8aa8fcab] flex items-center justify-between hover:shadow-2xl hover:border-[#00000083]"
            >
              <div className="flex items-center gap-5">
                <p className="text-base leading-5">22-30</p>
              </div>
            </Link>
            <Link
              to={`/step/2/40/?${parametro}`}
              className="w-full bg-[#ffffff] py-[16px] px-[24px] rounded-lg border  border-[#8aa8fcab] flex items-center justify-between hover:shadow-2xl hover:border-[#00000083]"
            >
              <div className="flex items-center gap-5">
                <p className="text-base leading-5">31-40</p>
              </div>
            </Link>
            <Link
              to={`/step/2/50/?${parametro}`}
              className="w-full bg-[#ffffff] py-[16px] px-[24px] rounded-lg border  border-[#8aa8fcab] flex items-center justify-between hover:shadow-2xl hover:border-[#00000083]"
            >
              <div className="flex items-center gap-5">
                <p className="text-base leading-5">41-50</p>
              </div>
            </Link>
            <Link
              to={`/step/2/60/?${parametro}`}
              className="w-full bg-[#ffffff] py-[16px] px-[24px] rounded-lg border  border-[#8aa8fcab] flex items-center justify-between hover:shadow-2xl hover:border-[#00000083]"
            >
              <div className="flex items-center gap-5">
                <p className="text-base leading-5">51-60</p>
              </div>
            </Link>
            <Link
              to={`/step/2/70/?${parametro}`}
              className="w-full bg-[#ffffff] py-[16px] px-[24px] rounded-lg border  border-[#8aa8fcab] flex items-center justify-between hover:shadow-2xl hover:border-[#00000083]"
            >
              <div className="flex items-center gap-5">
                <p className="text-base leading-5">61-70</p>
              </div>
            </Link>
            <Link
              to={`/step/2/71/?${parametro}`}
              className="w-full bg-[#ffffff] py-[16px] px-[24px] rounded-lg border  border-[#8aa8fcab] flex items-center justify-between hover:shadow-2xl hover:border-[#00000083]"
            >
              <div className="flex items-center gap-5">
                <p className="text-base leading-5">Mais de 71</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
