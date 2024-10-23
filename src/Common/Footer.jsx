import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { iconLink } from "../Assets";
import Container from "./Container";
import { menu, socialMedia } from "./RealData";
const Footer = ({ whiteMode }) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    selectedTab: "",
  });
  return (
    <>
      <Container
        whiteMode={whiteMode}
        outer={`${
          whiteMode ? "bg-[#fff]" : "bg-[#101010]"
        } border-t-[1px] border-[#989898]`}
        inner="my-14"
      >
        <section className="flex flex-col items-center justify-center">
          <p className="text-center py-2 text-2xl text-[#989898] font-libre">
            Let’s Build Something Together
          </p>
          <p className="text-center py-4 cursor-pointer">
            <a
              href={`mailto:jaichovatiya02@gmail.com`}
              data-rel="external"
              className={`no-underline font-semibold ml-2 text-2xl md:text-4xl ${
                whiteMode ? "text-black" : "text-[#fff]"
              }`}
            >
              jaichovatiya02@gmail.com
            </a>
          </p>

          <div className="py-6 flex items-end">
            {socialMedia?.map((d, i) => {
              return (
                <div
                  key={i}
                  className={` ${
                    whiteMode ? "text-black" : "text-[#fff]"
                  } p-2  hover:text-babyGreen cursor-pointer mr-2 flex items-center justify-center`}
                >
                  <span className="group-hover:underline font-semibold text-xl">
                    {d?.name}
                  </span>
                  <img src={iconLink} alt="link" className="ml-1 w-8 h-8" />
                </div>
              );
            })}
          </div>
          <p
            className={`text-center text-sm md:text-xl pt-4 pb-2 ${
              whiteMode ? "text-black" : "text-[#707070]"
            }`}
          >
            Designed by me. Built by Rishita Pramanick
          </p>
        </section>
      </Container>
      <p className="border-t-[1px] border-t-[#d1d1d1]"></p>
      <Container
        whiteMode={whiteMode}
        outer={`${whiteMode ? "bg-[#fff]" : "bg-[#101010]"}`}
      >
        <section
          className={`flex flex-col md:flex-row md:justify-between items-center md:items-start text-sm md:text-xl py-4
           ${whiteMode ? "text-[#707070]" : "text-[#C1C1C1] "}
            `}
        >
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Jay Chovatiya. All Rights Reserved
          </p>
          <p className="text-center md:text-left">Ahmedabad - India</p>
        </section>
      </Container>
    </>
  );
};

export default Footer;
