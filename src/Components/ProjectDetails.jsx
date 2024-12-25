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

  const handleClickScroll = (target) => {
    const elementA = document.getElementById(target);
    if (elementA) {
      // 👇 Will scroll smoothly to the top of the next section
      elementA.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <ScrollToTopOfPage />
      <Container whiteMode={whiteMode} inner="my-16 lg:my-28">
        {/* particular project details */}
        {/* introdetails part1 */}
        <section className="flex items-center justify-center">
          {specificList[0]?.introdetails?.map((d, i) => {
            return (
              <section
                className="my-10 w-[90%] xl:w-[70%] flex flex-col items-center justify-center"
                key={i}
              >
                <figure className="w-full h-auto md:h-[560px] pb-0 lg:pb-6">
                  <img
                    src={d?.image}
                    className="object-contain lg:object-fill w-full h-full rounded-lg"
                  />
                </figure>
                <section className="w-full mx-auto">
                  <h3
                    className={`py-6 !text-3xl lg:!text-4xl font-bold ${
                      whiteMode ? "text-[#101010]" : "text-[#fff]"
                    }`}
                  >
                    {d?.title}
                  </h3>
                  <hr />
                  <div className="py-6 grid grid-cols-1 md:grid-cols-3">
                    {d?.timeline?.map((x, i) => {
                      return (
                        <p
                          className="my-2 flex flex-col text-lg lg:text-xl"
                          key={i}
                        >
                          <span className="text-lg lg:text-xl py-1 text-[#707070] font-semibold">
                            {x?.title}
                          </span>
                          <span
                            className={`text-lg lg:text-xl ${
                              whiteMode ? "text-[#101010]" : "text-[#fff]"
                            }`}
                          >
                            {x?.details}
                          </span>
                        </p>
                      );
                    })}
                  </div>
                  <hr />
                </section>
              </section>
            );
          })}
        </section>
        <section className="grid grid-cols-1 md:grid-cols-[30%_70%]  xl:grid-cols-[20%_60%] mt-4 lg:mt-10">
          {/* left */}
          <section className="pr-10 py-8 hidden md:flex lg:flex-col items-start">
            <div className="sticky top-[150px]">
              {specificList[0]?.details?.map((d, i) => {
                return (
                  <p
                    key={i}
                    onClick={() => {
                      handleClickScroll(d?.id);
                      setState((prev) => {
                        return { ...prev, selectedTab: d?.title };
                      });
                    }}
                    className={`py-1.5 text-base lg:text-lg cursor-pointer duration-200 font-semibold
                        ${
                          whiteMode
                            ? "hover:text-[#525155]"
                            : "hover:text-[#fff]"
                        }
                        ${
                          state.selectedTab === d?.title
                            ? whiteMode
                              ? "text-[#101010]"
                              : "text-[#fff]"
                            : "text-[#a1a1a1]"
                        }
                        `}
                  >
                    {d?.title}
                  </p>
                );
              })}
            </div>
          </section>
          {/* right */}
          <section className="w-full flex flex-col">
            {/* details */}
            <section className="w-[100%] mx-auto">
              {specificList[0]?.details?.map((d, i) => {
                return (
                  <section
                    className={` flex flex-col ${
                      whiteMode ? "text-[#525155]" : "text-[#fff]"
                    }`}
                    key={i}
                  >
                    <p className={`h-8`} id={`${d?.id}`}></p>
                    <h3 className="pb-2 !text-3xl lg:!text-4xl font-semibold text-[#252525]">
                      {d?.title}
                    </h3>

                    <p
                      className="py-4 text-lg lg:text-xl text-left whitespace-pre-line"
                      dangerouslySetInnerHTML={{
                        __html: d?.description,
                      }}
                    ></p>
                    {d?.image && (
                      <figure className="w-full h-auto md:h-[550px] py-2 xl:py-6">
                        <img
                          src={d?.image}
                          className="object-contain lg:object-fill rounded-lg w-full h-full"
                        />
                      </figure>
                    )}
                  </section>
                );
              })}
            </section>
          </section>
        </section>

        {/* more to explore */}
        <h2
          className={`font-semibold ${
            whiteMode ? "text-[#101010]" : "text-[#fff]"
          } !text-4xl lg:!text-5xl my-10 lg:my-20 pt-10`}
        >
          More to explore
        </h2>
        {/* web */}
        <section className="hidden lg:grid grid-cols-1 md:grid-cols-2  gap-10 mb-20">
          {moreProjects?.slice(0, 2)?.map((d, i) => {
            return (
              <section className="flex flex-col items-start" key={i}>
                <figure className={`w-full mb-3`}>
                  <img
                    src={d?.img}
                    alt="project"
                    className="object-contain md:object-fill rounded-2xl w-full h-auto md:h-[400px]"
                  />
                </figure>
                <p className="py-1.5 text-2xl text-[#e8ca42] font-caveat">
                  {d?.type}
                </p>
                <h3
                  className={`py-1.5 font-semibold ${
                    whiteMode ? "text-[#101010]" : "text-[#fff]"
                  } !text-3xl`}
                >
                  {d?.title}
                </h3>

                <p
                  className="py-3 flex items-start justify-center text-lg cursor-pointer group"
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
        {/* mobile */}
        {moreProjects?.slice(0, 2)?.map((d, i) => {
          return (
            <section
              key={i}
              className={`lg:hidden flex flex-col rounded-[28px] w-[95%] my-4  mx-auto cursor-pointer bg-gray-100 `}
            >
              <figure className={`rounded-t-[28px] w-full h-full`}>
                <img
                  src={d?.img}
                  alt="project"
                  className="object-contain w-full h-full rounded-t-[28px]"
                />
              </figure>

              <section
                className={`flex items-center justify-center flex-col p-5`}
              >
                <p
                  className={`text-center py-1 font-caveat font-semibold rounded-[30px] w-fit text-lg sm:text-xl text-[#ffd859] `}
                >
                  {d?.type}
                </p>
                <h3 className={`py-1 font-bold !text-2xl text-center`}>
                  {d?.title}
                </h3>
                <p
                  className="py-3 flex items-start justify-center text-lg cursor-pointer group"
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
            </section>
          );
        })}
      </Container>
    </>
  );
};

export default ProjectDetails;
