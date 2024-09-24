import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "./Container";
import { menu } from "./RealData";
import { logo, mode, whiteMode, darkMode } from "../Assets";
const Header = ({ handleModeChange }) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    selectedTab: "menuA",
    mode: false,
  });

  return (
    <Container segment="header" whiteMode={state?.mode}>
      <nav className="flex w-full h-full">
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
        <section className="w-[85%] flex items-center justify-end">
          <section
            className="w-fit bg-[#3a3939]/40 flex p-2 rounded-[30px]
          backdrop-blur-sm"
          >
            {menu?.map((d, i) => {
              return (
                <p
                  key={i}
                  className={`mx-2 first:!ml-0 last:!mr-0 py-2 px-6 rounded-[30px] hover:bg-babyGreen hover:text-gray-600 duration-300 cursor-pointer text-xl font-bold ${
                    state.selectedTab === d?.id
                      ? "bg-babyGreen text-[#101010]"
                      : "text-[#fff]"
                  }`}
                  onClick={() => {
                    setState((prev) => {
                      return { ...prev, selectedTab: d?.id };
                    });

                    d?.id !== "menuD"
                      ? navigate(`${d?.link}`)
                      : window.open(
                          d?.download,
                          "_blank",
                          "toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes"
                        );
                  }}
                >
                  {d?.title}
                </p>
              );
            })}
          </section>
        </section>
        <figure className=" ml-2 w-[5%] flex items-center justify-center">
          <img
            src={state?.mode ? whiteMode : darkMode}
            alt="mode"
            className="duration-200 object-contain w-[40px] h-[40px] cursor-pointer bg-white rounded-full p-1.5"
            onClick={() => {
              handleModeChange(!state.mode);
              setState((prev) => {
                return { ...prev, mode: !state.mode };
              });
            }}
          />
        </figure>
      </nav>
    </Container>
  );
};

export default Header;
