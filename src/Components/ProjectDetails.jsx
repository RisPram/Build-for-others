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
      <Container whiteMode={whiteMode}>
        {/* particular project details */}
        {/* introdetails part1 */}
        <section className="flex items-center justify-center">
          {specificList[0]?.introdetails?.map((d, i) => {
            return (
              <section
                className="my-10 w-[70%] flex flex-col items-center justify-center"
                key={i}
              >
                <figure className="w-full h-[600px] pb-6">
                  <img
                    src={d?.image}
                    className="object-fill w-full h-full rounded-lg"
                  />
                </figure>
                <section className="w-full mx-auto">
                  <p
                    className={`py-6 text-4xl font-bold ${
                      whiteMode ? "text-[#101010]" : "text-[#fff]"
                    }`}
                  >
                    {d?.title}
                  </p>
                  <hr />
                  <div className="py-6 grid grid-cols-3">
                    {d?.timeline?.map((x, i) => {
                      return (
                        <p className="flex flex-col text-2xl" key={i}>
                          <span className="py-1 text-[#707070] font-semibold">
                            {x?.title}
                          </span>
                          <span
                            className={`${
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
        <section className="grid grid-cols-[20%_80%] mt-20">
          {/* left */}
          <section className="px-10 py-8 flex flex-col items-start">
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
                    className={`py-3 text-2xl cursor-pointer duration-200 font-semibold
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
          <section className="flex flex-col">
            {/* details */}
            <section className="w-[100%] mx-auto">
              {specificList[0]?.details?.map((d, i) => {
                return (
                  <section
                    className={`py-8 flex flex-col ${
                      whiteMode ? "text-[ #525155]" : "text-[#fff]"
                    }`}
                    key={i}
                    id={`${d?.id}`}
                  >
                    <p className="py-2 text-4xl font-semibold">{d?.title}</p>

                    <p
                      className="py-4 text-2xl text-justify whitespace-pre-line"
                      dangerouslySetInnerHTML={{
                        __html: d?.description,
                      }}
                    ></p>
                    {d?.image && (
                      <figure className="w-[80%] mx-auto h-[450px] py-6">
                        <img
                          src={d?.image}
                          className="object-contain rounded-lg w-full h-full"
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
                  } text-5xl`}
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
                    className={`group-hover:underline 
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
