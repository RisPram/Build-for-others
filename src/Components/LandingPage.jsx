import { personPhoto, homepageA } from "../Assets";
import Container from "../Common/Container";
import { skills } from "../Common/RealData";
import ScrollToTopOfPage from "../Common/ScrollToTopOfPage";
import MyProject from "./MyWork";
const LandingPage = ({ whiteMode }) => {
  return (
    <>
      <ScrollToTopOfPage />
      <Container whiteMode={whiteMode} inner="my-14 items-center">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-14 my-4">
          <section className="flex flex-col items-start justify-center">
            <h2
              className={`py-1  text-[#D1D1D1] font-libre ${
                whiteMode ? "text-[#616161]" : "text-[#D1D1D1]"
              }`}
            >
              Hi! I’m Jay Chovatiya.
            </h2>
            <h4 className="py-1 text-[#707070] font-libre">
              UI/UX Designer based in Ahmedabad
            </h4>
            <p
              className={`py-5 text-5xl ${
                whiteMode ? "text-black" : "text-[#fff]"
              } font-semibold`}
            >
              Simplifying tough problems to make accessible solutions with
            </p>
            <figure className="w-full rounded-lg py-1">
              <img
                src={homepageA}
                alt="change"
                className="object-contain w-full h-full"
              />
            </figure>
          </section>
          <figure className="w-full flex items-center justify-end rounded-lg">
            <img
              src={personPhoto}
              alt="person"
              className="object-contain w-[80%] h-[600px]"
            />
          </figure>
        </section>
      </Container>

      {/* skills */}
      <section className="relative flex overflow-x-hidden">
        <section
          className={`py-14 flex items-center justify-center animate-marquee whitespace-nowrap  ${
            whiteMode ? "bg-whiteMode" : "bg-baseColor"
          }`}
        >
          {skills?.map((d, i) => {
            return (
              <p
                key={i}
                className={`my-3 px-10 py-4 mx-3 text-xl rounded-[30px] border-2 border-[#707070]  ${
                  whiteMode ? "text-black" : "text-[#fff"
                } font-semibold cursor-pointer
              hover:bg-babyGreen hover:rounded-xl hover:-rotate-[10deg] hover:text-black duration-300`}
              >
                {d?.name}
              </p>
            );
          })}
        </section>
        <section
          className={`border-none absolute top-0 py-14 flex items-center justify-center ${
            whiteMode ? "bg-whiteMode" : "bg-baseColor"
          } animate-marquee2 whitespace-nowrap`}
        >
          {skills?.map((d, i) => {
            return (
              <p
                key={i}
                className={`my-3 px-10 py-4 mx-3 text-xl rounded-[30px] border-2 border-[#707070] ${
                  whiteMode ? "text-black" : "text-[#fff"
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
