import { useParams, useNavigate } from "react-router-dom";
import { iconLink } from "../Assets";
import Container from "../Common/Container";
import { myProject, projectDetails } from "../Common/RealData";

const ProjectDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  let specificList = projectDetails?.filter((d) => {
    return d?.type === params.key;
  });

  let moreProjects = myProject?.filter((d) => {
    return d?.slug !== params.key;
  });

  const handleClickScroll = (target) => {
    const elementA = document.getElementById(`${target}}`);

    if (elementA) {
      // 👇 Will scroll smoothly to the top of the next section
      elementA.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container>
      {/* particular project details */}
      <section className="grid grid-cols-[20%_70%] gap-[10%]">
        {/* left */}
        <section className="px-2 pt-[100px] flex flex-col items-start">
          <div className="sticky top-[210px]">
            {specificList[0]?.details?.map((d, i) => {
              return (
                <p
                  key={i}
                  onClick={() => {
                    handleClickScroll(d?.id);
                  }}
                  id={`${d?.id}`}
                  className="py-3 text-xl cursor-pointer text-[#c3c3c3] duration-200 hover:text-[#fff] font-semibold"
                >
                  {d?.title}
                </p>
              );
            })}
          </div>
        </section>
        {/* right */}
        <section className="flex flex-col">
          {/* introdetails part1 */}
          {specificList[0]?.introdetails?.map((d, i) => {
            return (
              <section className="w-full flex flex-col" key={i}>
                <figure className="w-full h-[600px] pb-6">
                  <img
                    src={d?.image}
                    className="object-fill w-full h-full rounded-lg"
                  />
                </figure>
                <section className="w-[75%] mx-auto">
                  <p className="py-6 text-4xl font-semibold text-[#fff]">
                    {d?.title}
                  </p>
                  <hr />
                  <div className="py-6 grid grid-cols-3">
                    {d?.timeline?.map((x, i) => {
                      return (
                        <p className="flex flex-col text-xl" key={i}>
                          <span className="py-1 text-[#707070] font-semibold">
                            {x?.title}
                          </span>
                          <span className=" text-[#fff]">{x?.details}</span>
                        </p>
                      );
                    })}
                  </div>
                  <hr />
                </section>
              </section>
            );
          })}
          {/* details-part2 */}
          <section className="w-[75%] mx-auto">
            {specificList[0]?.details?.map((d, i) => {
              return (
                <section className="py-8 flex flex-col text-[#fff]" key={i}>
                  <p className="py-2 text-3xl font-bold">{d?.title}</p>

                  <p
                    className="py-4 text-xl text-justify whitespace-pre-line"
                    dangerouslySetInnerHTML={{
                      __html: d?.description,
                    }}
                  ></p>
                  {d?.image && (
                    <figure className="w-full h-[450px] py-6">
                      <img
                        src={d?.image}
                        className="object-fill rounded-lg w-full h-full"
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
      <h2 className="font-semibold text-[#fff] !text-5xl my-20 pt-10">
        More to explore
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
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
              <h3 className="py-3 font-bold text-[#fff] text-5xl">
                {d?.title}
              </h3>

              <p
                className="py-3 flex items-start justify-center text-xl cursor-pointer group"
                onClick={() => {
                  window.scroll({ top: 0, left: 0, behavior: "smooth" });
                  navigate(`/project-details/${d?.slug}`);
                }}
              >
                <span className="group-hover:underline text-[#D1D1D1]">
                  See My Work
                </span>
                <img src={iconLink} alt="link" className="ml-2 w-8 h-8" />
              </p>
            </section>
          );
        })}
      </section>
    </Container>
  );
};

export default ProjectDetails;
