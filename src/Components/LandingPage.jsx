import { useState, useEffect } from "react";
import {
  personPhoto,
  homepageA,
  bgEffectA,
  homepageB,
  homepageC,
} from "../Assets";
import Container from "../Common/Container";
import { skills } from "../Common/RealData";
import ScrollToTopOfPage from "../Common/ScrollToTopOfPage";
import MyProject from "./MyWork";
const LandingPage = ({ whiteMode }) => {
  const [state, setState] = useState({
    image: homepageA,
    index: 0,
  });
  let arr = [homepageA, homepageB, homepageC];

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the heading index (loop back to 0 if it's the last heading)
      setState((prev) => {
        return { ...prev, index: (prev.index + 1) % arr?.length };
      });
      return () => clearInterval(interval);
    }, 2000);
  }, []); // Change every 2 seconds
  useEffect(() => {
    setState((prev) => {
      return { ...prev, image: arr[state.index] };
    });
  }, [state?.index]);
  return (
    <>
      <ScrollToTopOfPage />
      <Container
        whiteMode={whiteMode}
        inner="my-20 items-center"
        style={{ backgroundImage: `url(${bgEffectA})` }}
      >
        <section
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 my-4`}
        >
          <section className="flex flex-col items-start justify-center">
            <h2
              className={`py-1 font-libre !text-lg md:!text-3xl ${
                whiteMode ? "text-[#616161]" : "text-[#D1D1D1]"
              }`}
            >
              Hi! I’m Rishita Pramanick.
            </h2>
            <h4 className="py-1 text-[#707070] font-libre !text-lg md:!text-2xl">
              Frontend Developer (React JS) .
            </h4>
            <p
              className={`py-5 text-4xl lg:text-5xl !leading-snug ${
                whiteMode ? "text-black" : "text-[#fff]"
              } font-semibold`}
            >
              Simplifying tough problems to make accessible solutions with
            </p>
            <figure className="w-full lg:w-[80%] rounded-lg py-1 h-[100px] duration-200">
              <img src={state?.image} alt="change" className="w-full h-full" />
            </figure>
          </section>
          <figure className="w-full flex items-center justify-center lg:justify-end rounded-lg">
            <img
              src={personPhoto}
              alt="person"
              className="object-contain w-[100%] h-full lg:h-[450px] rounded-lg"
            />
          </figure>
        </section>
      </Container>

      {/* skills */}
      <section className="relative flex overflow-x-hidden mx-auto">
        <section
          className={`py-14 lg:py-20 flex items-center justify-center animate-marquee whitespace-nowrap  ${
            whiteMode ? "bg-whiteMode" : "bg-baseColor"
          }`}
        >
          {skills?.map((d, i) => {
            return (
              <p
                key={i}
                className={`my-3 px-10 py-2 lg:py-3 mx-3 text-base lg:text-xl rounded-[30px] border-[1px] border-[#707070] ${
                  whiteMode ? "text-black  hover:border-none" : "text-[#fff]"
                } font-semibold cursor-pointer hover:bg-babyGreen hover:rounded-xl hover:-rotate-[10deg] hover:text-black duration-300`}
              >
                {d?.name}
              </p>
            );
          })}
        </section>
        <section
          className={`py-14 lg:py-20 border-none absolute top-0 flex items-center justify-center ${
            whiteMode ? "bg-whiteMode" : "bg-baseColor"
          } animate-marquee2 whitespace-nowrap`}
        >
          {skills?.map((d, i) => {
            return (
              <p
                key={i}
                className={`my-3 px-10 py-2 lg:py-3 mx-3 text-base lg:text-xl rounded-[30px] border-[1px] border-[#707070] ${
                  whiteMode ? "text-black  hover:border-none" : "text-[#fff]"
                } font-semibold cursor-pointer
              hover:bg-babyGreen hover:rounded-xl hover:-rotate-[10deg] hover:text-black duration-300`}
              >
                {d?.name}
              </p>
            );
          })}
        </section>
      </section>

      {/* my project */}
      <MyProject whiteMode={whiteMode} />
    </>
  );
};

export default LandingPage;
