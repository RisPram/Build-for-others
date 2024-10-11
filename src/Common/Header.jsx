import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material";
import Container from "./Container";
import { menu } from "./RealData";
import { Jlogo, whiteMode, darkMode, day, night, hamburger } from "../Assets";
const Header = ({ handleModeChange }) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    selectedTab: "menuA",
    mode: false,
    openMenu: false,
    scrollPosition: 0,
  });

  const handleScroll = () => {
    const position = window.scrollY; // The number of pixels the document is currently scrolled vertically
    setState((prev) => {
      return { ...prev, scrollPosition: position };
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  const optionsBlockRef = useRef();

  const handleClickOutside = (event) => {
    if (!optionsBlockRef.current?.contains(event.target)) {
      setState((prev) => {
        return { ...prev, openMenu: false };
      });
    }
  };
  const handleMenuClick = (data) => {
    setState((prev) => {
      return { ...prev, selectedTab: data?.id };
    });

    setTimeout(() => {
      data?.id !== "menuD"
        ? navigate(`${data?.link}`)
        : window.open(data?.download, "_blank", "fullscreen=yes");
    }, 200);
  };
  return (
    <section
      className={`fixed top-0 z-50 py-4 w-full flex items-center justify-center bg-cover bg-center
       backdrop-blur-sm ${
         state.mode ? "bg-[#ffffffa3]" : "bg-[#0c0c0ca3]"
       } duration-300`}
    >
      <section className={`w-[90%] lg:w-[70%] flex flex-col bg-transparent`}>
        <nav
          className={`flex w-full h-full ${
            state.scrollPosition > 100 ? "justify-center" : "xl:justify-end"
          }`}
        >
          <figure
            className={`flex items-center ${
              state.scrollPosition > 100
                ? "w-fit mr-3 animate-move-in"
                : "w-[10%] animate-move-corner-left"
            }`}
          >
            <img
              src={Jlogo}
              alt="logo"
              className="object-contain w-14 h-14 cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            />
          </figure>

          {/* above 768px-md */}
          <section
            className={`hidden md:flex duration-300  ${
              state.scrollPosition > 100
                ? "w-fit animate-move-in"
                : "w-[90%] justify-end animate-move-corner-right"
            }`}
          >
            {/* menu */}
            <section
              className={`w-max bg-[#3a3939]/30 p-2 rounded-[30px] backdrop-blur-sm flex items-center justify-end`}
            >
              {menu?.map((d, i) => {
                return (
                  <p
                    key={i}
                    className={`w-max mx-2 first:!ml-0 last:!mr-0 py-2 px-6 rounded-[30px] hover:bg-gray-500 duration-300 cursor-pointer text-base font-bold ${
                      state.selectedTab === d?.id
                        ? "bg-babyGreen text-[#101010]"
                        : "text-[#fff]"
                    }`}
                    onClick={() => {
                      handleMenuClick(d);
                    }}
                  >
                    {d?.title}
                  </p>
                );
              })}
            </section>
            {/* mode switch */}
            <figure
              className={`ml-2 ${
                state.scrollPosition > 100 ? "w-[10%]" : "w-[5%]"
              } flex items-center justify-center`}
            >
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
          </section>

          {/* below 768px responsive hamburger */}
          <section className="w-[90%] flex md:hidden flex-col items-end justify-center">
            <section
              ref={optionsBlockRef}
              className="flex flex-col md:hidden relative items-center justify-end"
              onClick={() => {
                setTimeout(() => {
                  setState((prev) => {
                    return { ...prev, openMenu: !state.openMenu };
                  });
                }, 200);
              }}
            >
              <span className="cursor-pointer relative">
                {!state.openMenu && (
                  <img
                    src={hamburger}
                    alt="mode"
                    className={`ml-2 duration-200 object-contain w-[30px] h-[30px] cursor-pointer ${
                      !state?.mode ? "bg-white" : "bg-transparent"
                    } rounded-full p-1.5`}
                  />
                )}
              </span>

              {state.openMenu && (
                <div
                  className={`${
                    state.mode ? "bg-[#fff]" : "bg-baseColor"
                  }  z-50 w-[90vw] h-[400px] rounded-md py-2 px-1 absolute -top-11 right-0 flex flex-col menu-animate-slide-topBottom`}
                >
                  <p className="flex items-end justify-end w-full py-2">
                    <Close
                      className={`!h-8 !w-8 ${
                        state.mode ? "text-baseColor" : "text-whiteMode"
                      }`}
                    />
                  </p>
                  <div className="flex flex-col items-center justify-center">
                    {menu?.map((d, i) => {
                      return (
                        <p
                          key={i}
                          className={`my-1 py-2.5 px-10 rounded-[30px] hover:bg-babyGreen hover:text-gray-600 duration-300 cursor-pointer text-lg font-bold ${
                            state.selectedTab === d?.id
                              ? "bg-babyGreen text-[#101010]"
                              : state.mode
                              ? "text-baseColor"
                              : "text-[#fff]"
                          }`}
                          onClick={() => {
                            handleMenuClick(d);
                          }}
                        >
                          {d?.title}
                        </p>
                      );
                    })}
                  </div>
                  <figure
                    className="ml-2 w-full flex items-center justify-center px-5 cursor-pointer"
                    onClick={() => {
                      handleModeChange(!state.mode);
                      setState((prev) => {
                        return { ...prev, mode: !state.mode };
                      });
                    }}
                  >
                    <figcaption
                      className={` ${
                        state.mode ? "text-baseColor" : "text-[#fff]"
                      } my-1 py-2  rounded-[30px] duration-300 cursor-pointer text-lg font-bold`}
                    >
                      {state?.mode ? "Light Mode" : "Dark Mode"}
                    </figcaption>
                    <img
                      src={state?.mode ? whiteMode : darkMode}
                      alt="mode"
                      className={`mx-2 duration-200 object-contain w-[30px] h-[30px] cursor-pointer ${
                        !state?.mode ? "bg-white" : "bg-transparent"
                      } rounded-full p-1.5`}
                    />
                  </figure>
                </div>
              )}
            </section>
          </section>
        </nav>
      </section>{" "}
    </section>
  );
};

export default Header;
