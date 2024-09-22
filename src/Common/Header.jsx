import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from "./Container";
import { menu } from "./RealData";
import { logo } from "../Assets";
const Header = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    selectedTab: "menuA",
  });
  return (
    <Container
      segment="header"
      outer="sticky top-0 z-50
   h-[60px] w-full bg-black rounded-md bg-clip-padding
       backdrop-filter backdrop-blur-sm bg-opacity-10
    "
      inner="w-full  rounded-md bg-clip-padding bg-black
       backdrop-filter backdrop-blur-sm bg-opacity-10"
    >
      <nav className="flex w-full h-full">
        {/* <nav
        className=" h-[60px] w-full bg-yellow-400 rounded-md bg-clip-padding
       backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100"
      > */}
        <figure className="w-[10%] flex items-start">
          <img
            src={logo}
            alt="logo"
            className="object-contain w-full h-full cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        </figure>
        <section className="w-[90%] flex items-center justify-end">
          <section
            className=" w-fit bg-[#3a3939] flex p-2 rounded-[30px]
           bg-clip-padding
       backdrop-filter backdrop-blur-sm bg-opacity-10
          "
          >
            {menu?.map((d, i) => {
              return (
                <p
                  key={i}
                  className={`mx-2 first:!ml-0 last:!mr-0 py-2 px-6 rounded-[30px] hover:bg-babyGreen hover:text-gray-600 duration-300 cursor-pointer text-lg font-bold ${
                    state.selectedTab === d?.id
                      ? "bg-babyGreen text-[#101010]"
                      : "text-[#fff]"
                  }`}
                  onClick={() => {
                    setState((prev) => {
                      return { ...prev, selectedTab: d?.id };
                    });
                    navigate(`${d?.link}`);
                  }}
                >
                  {d?.title}
                </p>
              );
            })}
          </section>
        </section>
      </nav>
    </Container>
  );
};

export default Header;
