import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { iconLink } from "../Assets";
import { myProject } from "../Common/RealData";
import Container from "../Common/Container";
const MyProject = ({ whiteMode }) => {
  const navigate = useNavigate();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [state, setState] = useState({
    customCursor: false,
    position: { x: 0, y: 0 },
  });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setState((prev) => {
        return { ...prev, position: { x: e.clientX, y: e.clientY } };
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <Container whiteMode={whiteMode} inner="py-10 lg:py-18">
      <h2
        className={`block lg:hidden mb-4 text-center font-semibold !text-3xl underline`}
      >
        My Contributions
      </h2>
      {myProject?.map((d, i) => {
        return (
          <>
            {/* web */}
            <section
              key={i}
              className={`hidden lg:block w-full my-8 lg:my-14 mx-auto relative cursor-pointer`}
              // onMouseEnter={() => {
              //   setState((prev) => {
              //     return { ...prev, customCursor: true };
              //   });
              // }}
              // onMouseLeave={() => {
              //   setState((prev) => {
              //     return { ...prev, customCursor: false };
              //   });
              // }}
              onClick={() => {
                navigate(`/project-details/${d?.slug}`);
              }}
            >
              <section
                className={`absolute left-14 xl:left-20 top-1/2 -translate-y-1/2 flex items-start justify-center flex-col z-50`}
              >
                <p
                  className={`mb-2 py-1 font-caveat font-semibold rounded-[30px] w-fit text-lg sm:text-xl text-[#ffd859] `}
                >
                  {d?.type}
                </p>
                <h3
                  className={`py-1.5 font-bold !text-2xl lg:!text-3xl text-[#fff]`}
                >
                  {d?.title}
                </h3>
                <p
                  className={`py-1.5 text-sm md:text-base w-full lg:w-[60%] text-[#D1D1D1]
                `}
                >
                  {d?.description}
                </p>
                {/* <p
                className={`py-1.5 flex items-start justify-center text-lg cursor-pointer group text-[#D1D1D1]`}
                onClick={() => {
                  navigate(`/project-details/${d?.slug}`);
                }}
              >
                <span className="group-hover:underline font-semibold">
                  See My Work
                </span>
                <img src={iconLink} alt="link" className="ml-2 w-8 h-8" />
              </p> */}
              </section>

              <figure className={`p-2 lg:p-0 relative w-full h-full`}>
                <img
                  src={d?.img}
                  alt="project"
                  className="object-contain w-full h-full"
                />
                {/* {state.customCursor && (
                <div className="hidden lg:block cursor-none">
                  <div
                    className="border-[1px] border-[#989898] bg-[#fff]/20 backdrop-blur-xl duration-300 fixed text-base 
                  rounded-full p-7 text-center text-black font-semibold"
                    style={{
                      left: `${state.position.x}px`,
                      top: `${state.position.y}px`,
                      transform: `translate(-50%, -50%)`,
                    }}
                    onClick={() => {
                      navigate(`/project-details/${d?.slug}`);
                    }}
                  >
                    View <br /> project
                  </div>
                </div>
              )} */}
              </figure>
            </section>
            {/* mobile */}
            <section
              key={i}
              className={`lg:hidden flex flex-col rounded-xl w-[95%] my-4  mx-auto cursor-pointer bg-gray-100 p-2`}
              onClick={() => {
                navigate(`/project-details/${d?.slug}`);
              }}
            >
              <figure className={`p-2  w-full h-full`}>
                <img
                  src={d?.img}
                  alt="project"
                  className="object-contain w-full h-full"
                />
              </figure>
              <section className={`flex items-center justify-center flex-col`}>
                <p
                  className={`text-center mb-2 py-1 font-caveat font-semibold rounded-[30px] w-fit text-lg sm:text-xl text-[#ffd859] `}
                >
                  {d?.type}
                </p>
                <h3 className={`py-1 font-bold !text-2xl text-center`}>
                  {d?.title}
                </h3>
                <p
                  className={`py-1 text-sm md:text-base w-full text-gray-700 text-center whitespace-pre-line
                `}
                >
                  {d?.description}
                </p>
              </section>
            </section>
          </>
        );
      })}
    </Container>
  );
};

export default MyProject;
