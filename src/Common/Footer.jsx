import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "./Container";
import { menu, socialMedia } from "./RealData";
const Footer = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    selectedTab: "",
  });
  return (
    <>
      <Container
        outer="bg-[#101010] border-t-[1px] border-[#4c4c4c]"
        inner="my-16"
      >
        <section className="flex flex-col items-center justify-center">
          <p className=" py-2 font-semibold text-2xl text-[#989898]">
            Let’s Build Something Together
          </p>
          <p className="p-2 flex cursor-pointer items-end">
            <a
              href={"mailto:jaichovatiya02@gmail.com"}
              data-rel="external"
              className="no-underline font-semibold ml-2 text-3xl text-[#fff]"
            >
              jaichovatiya02@gmail.com
            </a>
          </p>
          <div className="py-3 flex items-end">
            {socialMedia?.map((d, i) => {
              return (
                <figure
                  key={i}
                  className="p-2 bg-[#5F5F5F] hover:bg-babyGreen cursor-pointer rounded-xl mr-2 flex items-center justify-center"
                >
                  <img src={d?.icon} alt="smedia" className="mr-2 w-8 h-8" />
                </figure>
              );
            })}
          </div>
        </section>
      </Container>
      <p className="border-t-[1px] border-t-[#4c4c4c]"></p>
      <Container outer="bg-[#101010]">
        <section className="flex justify-between text-xl text-[#C1C1C1] py-4">
          <p>© {new Date().getFullYear()} Jay Chovatiya. All Rights Reserved</p>
          <p>Ahmedabad - India</p>
        </section>
      </Container>
    </>
  );
};

export default Footer;
