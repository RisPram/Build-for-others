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
      {/* <h2
        className={`block lg:hidden mb-4 text-center font-semibold !text-3xl underline`}
      >
        My Contributions
      </h2> */}
      {myProject?.map((d, i) => {
        return (
          <>
            {/* web */}
            <section
              key={i}
              className={`hidden lg:block w-full my-8 lg:my-14 mx-auto relative cursor-pointer lg:h-[450px] xl:h-[700px] rounded-[28px]`}
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
                className={`
                  
                  w-full absolute left-14 xl:left-20 top-1/2 -translate-y-1/2 flex items-start justify-center flex-col z-40`}
              >
                <p
                  className={`mb-2 py-1 font-caveat font-semibold rounded-[30px] w-fit text-xl sm:text-xl text-[#ffd859] `}
                >
                  {d?.type}
                </p>
                <h3
                  className={`py-1.5 font-bold !text-3xl lg:!text-5xl text-[#fff]`}
                >
                  {d?.title}
                </h3>
                <p
                  className={`py-1.5 mt-2 text-lg md:text-lg w-full lg:w-[40%] text-[#D1D1D1] whitespace-pre-line
                `}
                >
                  {d?.description}
                </p>
                <p
                  className={`py-1.5 mt-2 flex items-start justify-center text-lg cursor-pointer group text-[#D1D1D1]`}
                >
                  <span className="group-hover:underline font-semibold">
                    View Project
                  </span>
                  <img src={iconLink} alt="link" className="ml-2 w-8 h-8" />
                </p>
              </section>

              <section className="z-30 h-full absolute  w-full rounded-[28px] p-2">
                <section className=" h-full bg-gradient-to-r from-black to-transparent w-full rounded-[28px]"></section>
              </section>
              <section className="p-2 w-full h-full rounded-[28px] relative">
                <video
                  loop
                  muted
                  autoPlay
                  preload="metadata"
                  className="lg:p-0 relative w-full h-full rounded-[28px] object-cover"
                  aria-label={`Video for project ${d?.title}`}
                >
                  <source src={d?.video} type="video/mp4" />
                </video>
              </section>

              {/* <figure className={`p-2 lg:p-0 relative w-full h-full`}>
                <img
                  src={d?.img}
                  alt="project"
                  className="object-fill w-full h-full"
                />
               
            
              </figure> */}
            </section>
            {/* mobile */}
            <section
              key={i}
              className={`lg:hidden flex flex-col rounded-[28px] w-[95%] my-4  mx-auto cursor-pointer bg-gray-100 `}
              onClick={() => {
                navigate(`/project-details/${d?.slug}`);
              }}
            >
              {/* <figure className={`p-2  w-full h-full`}>
                <img
                  src={d?.img}
                  alt="project"
                  className="object-contain w-full h-full"
                />
              </figure> */}
              <section className="w-full h-full">
                <video
                  loop
                  muted
                  autoPlay
                  preload="metadata"
                  className="lg:p-0 relative w-full h-[250px] rounded-t-[28px] object-cover"
                  aria-label={`Video for project ${d?.title}`}
                >
                  <source src={d?.video} type="video/mp4" />
                </video>
              </section>
              <section
                className={`flex items-center justify-center flex-col p-5`}
              >
                <p
                  className={`text-center mb-2 py-1 font-caveat font-semibold rounded-[30px] w-fit text-lg sm:text-xl text-[#ffd859] `}
                >
                  {d?.type}
                </p>
                <h3 className={`py-1 font-bold !text-2xl text-center`}>
                  {d?.title}
                </h3>
                <p
                  className={`py-1 px-2 text-sm md:text-base w-full text-gray-700 text-center whitespace-pre-line
                `}
                >
                  {d?.description?.slice(0, 55)}...
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
