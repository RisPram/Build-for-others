import { useNavigate } from "react-router-dom";
import { iconLink } from "../Assets";
import { myProject } from "../Common/RealData";
import Container from "../Common/Container";
const MyProject = ({ whiteMode }) => {
  const navigate = useNavigate();
  return (
    <Container whiteMode={whiteMode} inner="py-20">
      {myProject?.map((d, i) => {
        return (
          <section
            key={i}
            className={`grid grid-cols-1 lg:grid-cols-2 my-14 gap-14`}
          >
            <section
              className={`flex items-start justify-center flex-col  ${
                i % 2 == 0 ? "order-2 lg:order-1" : "order-2 lg:order-2"
              }`}
            >
              <p className="mb-2 py-1 sm:py-2 !text-black font-caveat font-semibold bg-babyGreen rounded-[30px] w-fit px-4 sm:px-6 text-lg sm:text-xl">
                {d?.type}
              </p>
              <h3
                className={`py-3 font-bold !text-3xl lg:!text-4xl ${
                  whiteMode ? "text-[#101010]" : "text-[#fff]"
                }`}
              >
                {d?.title}
              </h3>
              <p
                className={`py-3 text-xl whitespace-pre-line w-full lg:w-[80%] ${
                  whiteMode ? "text-[#525155]" : "text-[#D1D1D1]"
                }`}
              >
                {d?.description}
              </p>
              <p
                className={`py-3 flex items-start justify-center text-lg cursor-pointer group  ${
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
              className={`p-2 ${
                i % 2 == 0 ? " order-1 lg:order-2" : " order-1 lg:order-1"
              }`}
            >
              <img
                src={d?.img}
                alt="project"
                className="object-contain w-full h-full"
              />
            </figure>
          </section>
        );
      })}
    </Container>
  );
};

export default MyProject;
