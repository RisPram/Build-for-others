import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
        } border-t-[1px] border-[#989898`}
        inner="my-14"
      >
        <section className="flex flex-col items-center justify-center">
          <p className="text-center py-2  text-2xl text-[#989898] font-libre">
            Let’s Build Something Together
          </p>

          <p className="text-center py-4 cursor-pointer">
            <a
              href={"mailto:jaichovatiya02@gmail.com"}
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
                <figure
                  key={i}
                  className={` ${
                    whiteMode ? "bg-[#d1d1d1]" : "bg-[#5F5F5F]"
                  } p-2  hover:bg-babyGreen cursor-pointer rounded-xl mr-2 flex items-center justify-center`}
                >
                  <img src={d?.icon} alt="smedia" className="mr-2 w-8 h-8" />
                </figure>
              );
            })}
          </div>
          <p
            className={`text-center text-xl pt-8 pb-2 ${
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
          className={`flex flex-col md:flex-row md:justify-between items-center md:items-start text-lg md:text-xl py-4
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
