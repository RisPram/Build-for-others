import Container from "../Common/Container";
import { skills } from "../Common/RealData";
import MyProject from "./MyWork";
const LandingPage = () => {
  return (
    <>
      <Container inner="my-14 items-center">
        <h1 className="!text-6xl w-[80%]">
          <span className="text-[#fff] leading-snug">
            Hey, I'm Jay Chovatiya 👋{" "}
          </span>
          <br />
          <span className="text-[#7A7A7A] leading-snug">
            Passionate UI/UX Designer Focused on Creating User-Centered,
            Intuitive, and Visually Engaging Digital Experiences.
          </span>
        </h1>
      </Container>

      {/* skills */}
      <section className="relative flex overflow-x-hidden">
        <section className="py-14 flex items-center justify-center bg-baseColor animate-marquee whitespace-nowrap">
          {skills?.map((d, i) => {
            return (
              <p
                key={i}
                className="my-3 px-10 py-4 mx-3 text-lg rounded-[30px] border-2 border-[#707070] text-[#fff] font-semibold cursor-pointer
              hover:bg-babyGreen hover:rounded-xl hover:-rotate-[10deg] hover:text-black duration-300"
              >
                {d?.name}
              </p>
            );
          })}
        </section>
        <section className="border-none absolute top-0 py-14 flex items-center justify-center bg-baseColor animate-marquee2 whitespace-nowrap">
          {skills?.map((d, i) => {
            return (
              <p
                key={i}
                className="my-3 px-10 py-4 mx-3 text-lg rounded-[30px] border-2 border-[#707070] text-[#fff] font-semibold cursor-pointer
              hover:bg-babyGreen hover:rounded-xl hover:-rotate-[10deg] hover:text-black duration-300"
              >
                {d?.name}
              </p>
            );
          })}
        </section>
      </section>

      {/* my project */}
      <MyProject />
    </>
  );
};

export default LandingPage;
