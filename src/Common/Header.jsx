import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material";
import Container from "./Container";
import { menu } from "./RealData";
import { Jlogo, whiteMode, darkMode, hamburger, close } from "../Assets";
const Header = ({ handleModeChange }) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    selectedTab: "menuA",
    mode: false,
    openMenu: false,
    scrollPosition: 0,
  });

  // useEffect(() => {
  //   localStorage.setItem("darkmode", JSON.stringify(state.mode));
  // }, [state.mode]);
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
      setState((prev) => {
        return { ...prev, openMenu: false };
      });
      data?.id !== "menuD"
        ? navigate(`${data?.link}`)
        : window.open(data?.download, "_blank", "fullscreen=yes");
    }, 200);
  };
  console.log("openMenu>>", state.openMenu);
  return (
    <section
      className={`fixed top-0 z-50 py-4 w-full flex items-center justify-center bg-cover bg-center
       backdrop-blur-sm 
      
       ${!state.mode ? "bg-[#ffffffa3]" : "bg-[#0c0c0ca3]"} duration-300`}
    >
      <section
        className={`w-[90%] lg:w-[70%] flex flex-col 
            
        bg-transparent
            ${state.scrollPosition > 100 ? "items-center" : ""}
            `}
      >
        <nav
          className={`h-[60px] md:h-[70px] p-2 lg:px-2 lg:py-1 border-gray-200 flex 
             ${state.openMenu ? "bg-white" : "bg-transparent"}
            ${
              state.scrollPosition > 100
                ? "w-full justify-end md:justify-center md:w-fit md:px-3"
                : "xl:justify-end w-full"
            } border-2 rounded-[50px]
          ${
            !state.openMenu
              ? ""
              : "border-b-transparent rounded-t-3xl rounded-b-none"
          }`}
        >
          <figure
            className={`flex items-center ${
              state.scrollPosition > 100
                ? "md:w-fit md:mr-3 md:animate-moveToCenterfromleft"
                : "md:w-[10%] md:animate-move-corner-left"
            }`}
          >
            <img
              src={Jlogo}
              alt="logo"
              className="object-contain w-10 h-10 md:w-14 md:h-14 cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            />
          </figure>

          {/* above 768px-md */}
          <section
            className={`hidden md:flex duration-300  ${
              state.scrollPosition > 100
                ? "w-fit animate-moveToCenterfromRight"
                : "w-[90%] justify-end animate-move-corner-right"
            }`}
          >
            {/* menu */}
            <section
              className={` ${
                state?.mode
                  ? "rounded-[30px] backdrop-blur-sm bg-[#3a3939]/20"
                  : ""
              } w-max p-2 flex items-center justify-end`}
            >
              {menu?.map((d, i) => {
                return (
                  <p
                    key={i}
                    className={`w-max mx-2 text-[#101010] border-2 first:!ml-0 last:!mr-0 py-2 px-6 rounded-[30px] hover:bg-gray-100 duration-300 cursor-pointer text-base font-bold ${
                      state.selectedTab === d?.id
                        ? "border-gray-200"
                        : "border-transparent"
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
            {/* <figure
              className={`ml-2 ${
                state.scrollPosition > 100 ? "w-[10%]" : "w-[5%]"
              } flex items-center justify-center`}
            >
              <img
                src={!state?.mode ? whiteMode : darkMode}
                alt="mode"
                className="duration-200 object-contain w-[25px] h-[25px] cursor-pointer"
                onClick={() => {
                  handleModeChange(!state.mode);
                  setState((prev) => {
                    return { ...prev, mode: !state.mode };
                  });
                }}
              />
            </figure> */}
          </section>

          {/* below 768px responsive hamburger */}
          <section className="w-[90%] flex md:hidden flex-col items-end justify-center">
            <section
              ref={optionsBlockRef}
              className={`flex flex-col md:hidden relative items-center justify-end`}
            >
              <span className={`cursor-pointer relative`}>
                <img
                  src={`${!state.openMenu ? hamburger : close}`}
                  alt="menu"
                  onClick={() => {
                    setTimeout(() => {
                      setState((prev) => {
                        return { ...prev, openMenu: !state.openMenu };
                      });
                    }, 200);
                  }}
                  className={`ml-2 duration-200 object-contain w-[40px] h-[40px] cursor-pointer`}
                />
              </span>

              {/* menulist container */}
              {state.openMenu && (
                <div
                  className={`
                     
                    ${
                      !state.mode ? "bg-[#fff]" : "bg-baseColor"
                    } z-50 w-[90vw] rounded-b-[30px] border-x-[2px] border-b-[2px] border-gray-200 flex flex-col absolute top-[48px] right-[-10px] 
                 `}
                >
                  <div
                    className={`flex flex-col items-center justify-center
                    ${state.openMenu ? "animate-heightIncrease" : ""}
                    `}
                  >
                    {menu?.map((d, i) => {
                      return (
                        <p
                          key={i}
                          // className={`my-1 py-2.5 px-10 rounded-[30px] text-[#101010]  hover:bg-babyGreen hover:text-gray-200 duration-300 cursor-pointer text-lg font-bold ${
                          //   state.selectedTab === d?.id
                          //     ? "bg-babyGreen"
                          //     : state.mode
                          //     ? "text-baseColor"
                          //     : "text-[#fff]"
                          // }`}
                          className={`my-1 py-2.5 px-10 rounded-[30px] text-[#101010] border-2  hover:bg-gray-200 hover:text-gray-600 duration-300 cursor-pointer text-lg font-semibold ${
                            state.selectedTab === d?.id
                              ? "border-gray-200"
                              : "border-transparent"
                          }
                          `}
                          onClick={() => {
                            handleMenuClick(d);
                          }}
                        >
                          {d?.title}
                        </p>
                      );
                    })}
                  </div>
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
