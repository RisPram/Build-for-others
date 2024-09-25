import { bsideA, bsideB, bsideC, bsideD, bsideE } from "../Assets";
import Container from "../Common/Container";
import ScrollToTopOfPage from "../Common/ScrollToTopOfPage";
const Business = ({ whiteMode }) => {
  const arrangement = [
    "lg:row-span-2 ",
    "lg:col-span-2 ",
    "",
    "",
    "lg:col-span-2",
    "",
  ];

  const arrImages = [bsideA, bsideB, bsideC, bsideC, bsideD, bsideE];
  return (
    <>
      <ScrollToTopOfPage />

      <Container whiteMode={whiteMode} inner="my-20">
        <section className="grid py-10 lg:grid-cols-[30%_33%_33%] gap-[2%] grid-rows-[450px_350px_400px]">
          {arrImages?.map((d, i) => {
            return (
              <figure className={`w-full ${arrangement[i]}`} key={i}>
                {i !== 2 && (
                  <img
                    src={d}
                    alt="pic"
                    className={`object-cover w-full h-full rounded-xl`}
                  />
                )}
                {i == 2 && (
                  <figcaption className="h-full w-full flex flex-col items-start justify-center p-2">
                    <p
                      className={`text-4xl font-semibold py-3 text-left ${
                        whiteMode ? "text-[#101010]" : "text-[#fff]"
                      }`}
                    >
                      B-Side
                    </p>
                    <p
                      className={`text-xl py-3 ${
                        whiteMode ? "text-[#101010]" : "text-[#c1c1c1]"
                      }`}
                    >
                      Personal project for skills enhancement and self-driven
                      initiatives that can help you learn and develop new
                      skills.
                    </p>
                  </figcaption>
                )}
              </figure>
            );
          })}
        </section>
      </Container>
    </>
  );
};

export default Business;
