import { useNavigate } from "react-router-dom";
import { iconLink } from "../Assets";
import { myProject } from "../Common/RealData";
import Container from "../Common/Container";
const MyProject = () => {
  const navigate = useNavigate();
  return (
    <Container>
      {myProject?.map((d, i) => {
        return (
          <section
            key={i}
            className="grid grid-cols-1 md:grid-cols-2 my-10 gap-14"
          >
            <section
              className={`flex items-start justify-center flex-col text-[#fff] ${
                i % 2 == 0 ? "order-1" : "order-2"
              }`}
            >
              <p className="mb-2 py-3 !text-black font-semibold bg-babyGreen rounded-[30px] w-fit px-6 text-xl">
                {d?.type}
              </p>
              <h3 className="py-3 font-bold text-5xl">{d?.title}</h3>
              <p className="py-3 text-xl whitespace-pre-line">
                {d?.description}
              </p>
              <p
                className="py-3 flex items-start justify-center text-xl cursor-pointer group"
                onClick={() => {
                  navigate(`/project-details/${d?.slug}`);
                }}
              >
                <span className="group-hover:underline">See My Work</span>
                <img src={iconLink} alt="link" className="ml-2 w-8 h-8" />
              </p>
            </section>

            <figure className={`p-2 ${i % 2 == 0 ? "order-2" : "order-1"}`}>
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
