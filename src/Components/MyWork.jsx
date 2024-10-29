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
    <Container whiteMode={whiteMode} inner="py-10 lg:py-20">
      <h2
        className={`block lg:hidden mb-4 text-center font-semibold !text-3xl underline`}
      >
        My Contributions
      </h2>
      {myProject?.map((d, i) => {
        return (
          <section
            key={i}
            className={`grid grid-cols-1 lg:grid-cols-2 my-8 lg:my-14 gap-14`}
            onMouseEnter={() => {
              setState((prev) => {
                return { ...prev, customCursor: true };
              });
            }}
            onMouseLeave={() => {
              setState((prev) => {
                return { ...prev, customCursor: false };
              });
            }}
          >
            <section
              className={`flex items-start justify-center flex-col  ${
                i % 2 == 0 ? "order-2 lg:order-1" : "order-2 lg:order-2"
              }`}
            >
              <p
                className={`mb-2 py-1 sm:py-2 font-caveat font-semibold rounded-[30px] w-fit text-lg sm:text-2xl
                ${whiteMode ? "text-[#101010]" : "text-[#ffd859]"}
                `}
              >
                {d?.type}
              </p>
              <h3
                className={`py-1.5 lg:py-3 font-bold !text-3xl lg:!text-4xl ${
                  whiteMode ? "text-[#101010]" : "text-[#fff]"
                }`}
              >
                {d?.title}
              </h3>
              <p
                className={`py-1.5 lg:py-3 text-lg md:text-xl whitespace-pre-line w-full lg:w-[80%] ${
                  whiteMode ? "text-[#525155]" : "text-[#D1D1D1]"
                }`}
              >
                {d?.description}
              </p>
              <p
                className={`lg:hidden py-1.5 lg:py-3 flex items-start justify-center text-lg cursor-pointer group  ${
                  whiteMode ? "text-[#525155]" : "text-[#D1D1D1]"
                }`}
                onClick={() => {
                  navigate(`/project-details/${d?.slug}`);
                }}
              >
                <span className="group-hover:underline font-semibold">
                  See My Work
                </span>
                <img src={iconLink} alt="link" className="ml-2 w-8 h-8" />
              </p>
            </section>

            <figure
              className={`p-2 lg:p-0 ${
                i % 2 == 0 ? " order-1 lg:order-2" : " order-1 lg:order-1"
              }`}
            >
              <img
                src={d?.img}
                alt="project"
                className="object-contain w-full h-full"
              />
              {state.customCursor && (
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
              )}
            </figure>
          </section>
        );
      })}
    </Container>
  );
};

export default MyProject;
