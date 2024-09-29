import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { iconLink } from "../Assets";
import Container from "../Common/Container";
import { myProject, projectDetails } from "../Common/RealData";
import ScrollToTopOfPage from "../Common/ScrollToTopOfPage";

const ProjectDetails = ({ whiteMode }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [state, setState] = useState({ selectedTab: "" });
  let specificList = projectDetails?.filter((d) => {
    return d?.type === params.key;
  });

  let moreProjects = myProject?.filter((d) => {
    return d?.slug !== params.key;
  });
  return (
    <>
      <ScrollToTopOfPage />
      <Container whiteMode={whiteMode}>
        {/* particular project details */}
        {/* introdetails part1 */}
        <section className="flex items-center justify-center">
          {specificList[0]?.introdetails?.map((d, i) => {
            return (
              <section
                className="my-10 w-[90%] lg:w-[70%] flex flex-col items-center justify-center"
                key={i}
              >
                <figure className="w-full h-[350px] md:h-[600px] pb-6">
                  <img
                    src={d?.image}
                    className="object-fill w-full h-full rounded-lg"
                  />
                </figure>
                <section className="w-full flex ">
                  <h3
                    className={`w-[80%] py-6 !text-3xl lg:!text-4xl font-bold ${
                      whiteMode ? "text-[#101010]" : "text-[#fff]"
                    }`}
                  >
                    {d?.title}
                  </h3>
                  <p className={`w-[20%] flex items-center justify-center`}>
                    <p
                      className={`flex py-2 px-7 text-xl cursor-pointer group  ${
                        whiteMode ? "text-black" : "text-[#D1D1D1]"
                      } hover:bg-babyGreen rounded-lg`}
                      onClick={() => {
                        window.open();
                      }}
                    >
                      <span className="group-hover:underline font-semibold">
                        Visit Site
                      </span>
                      <img src={iconLink} alt="link" className="ml-2 w-8 h-8" />
                    </p>
                  </p>
                </section>
              </section>
            );
          })}
        </section>

        {/* more to explore */}
        <h2
          className={`font-semibold ${
            whiteMode ? "text-[#101010]" : "text-[#fff]"
          } !text-5xl my-20 pt-10`}
        >
          More to explore
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-20">
          {moreProjects?.map((d, i) => {
            return (
              <section className="flex flex-col items-start" key={i}>
                <figure className={``}>
                  <img
                    src={d?.img}
                    alt="project"
                    className="object-contain w-full h-[300px]"
                  />
                </figure>
                <p className="py-3 !text-[#707070] text-xl">{d?.type}</p>
                <h3
                  className={`py-3 font-bold ${
                    whiteMode ? "text-[#101010]" : "text-[#fff]"
                  } !text-5xl`}
                >
                  {d?.title}
                </h3>

                <p
                  className="py-3 flex items-start justify-center text-xl cursor-pointer group"
                  onClick={() => {
                    window.scroll({ top: 0, left: 0, behavior: "smooth" });
                    navigate(`/project-details/${d?.slug}`);
                  }}
                >
                  <span
                    className={`group-hover:underline font-semibold 
                    ${whiteMode ? "text-[#525155]" : "text-[#D1D1D1]"}
                    `}
                  >
                    See My Work
                  </span>
                  <img src={iconLink} alt="link" className="ml-2 w-8 h-8" />
                </p>
              </section>
            );
          })}
        </section>
      </Container>
    </>
  );
};

export default ProjectDetails;
