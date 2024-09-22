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
      <Container outer="bg-[#101010]" inner="my-10">
        <section className="grid grid-cols-2 gap-4 w-full">
          <section className="flex flex-col items-start justify-start text-xl">
            <p className="py-2 text-[#707070]">MAIN</p>
            {menu?.map((d, i) => {
              return (
                <p
                  key={i}
                  className={`py-2 text-[#C1C1C1] cursor-pointer hover:underline  ${
                    state.selectedTab === d?.id ? "underline" : ""
                  }`}
                  onClick={() => {
                    setState((prev) => {
                      return { ...prev, selectedTab: d?.id };
                    });
                    window.scroll({ top: 0, left: 0, behavior: "smooth" });
                    navigate(`${d?.link}`);
                  }}
                >
                  {d?.title}{" "}
                </p>
              );
            })}
          </section>
          <section className="flex flex-col items-end">
            <p className="p-2 flex cursor-pointer items-end">
              <a
                href={"mailto:jaichovatiya02@gmail.com"}
                data-rel="external"
                className="no-underline font-semibold ml-2 text-3xl text-[#fff]"
              >
                jaichovatiya02@gmail.com
              </a>
            </p>
            <div className="py-2 flex items-end">
              {socialMedia?.map((d, i) => {
                return (
                  <figure
                    key={i}
                    className="p-2 bg-[#5F5F5F] hover:bg-babyGreen cursor-pointer rounded-xl mr-2 flex items-center justify-center"
                  >
                    <img src={d?.icon} alt="smedia" className="mr-2  w-8 h-8" />
                  </figure>
                );
              })}
            </div>
          </section>
        </section>
      </Container>
      <hr />
      <Container outer="bg-[#101010]">
        <section className="flex justify-between text-xl text-[#C1C1C1]">
          <p>© {new Date().getFullYear()} Jay Chovatiya. All Rights Reserved</p>
          <p>Ahmedabad - India</p>
        </section>
      </Container>
    </>
  );
};

export default Footer;
