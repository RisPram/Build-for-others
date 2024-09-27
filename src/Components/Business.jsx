import { useState } from "react";
import Container from "../Common/Container";
import ScrollToTopOfPage from "../Common/ScrollToTopOfPage";
import { businessImages } from "../Common/RealData";
const Business = ({ whiteMode }) => {
  const [state, setState] = useState({
    selectedData: {},
  });
  const arrangement = [
    "order-2 lg:order-1 lg:row-span-2 ",
    "order-3 lg:order-2 lg:col-span-2 ",
    "order-1 lg:order-3",
    "order-4",
    "order-5 lg:col-span-2",
    "order-6",
  ];

  return (
    <>
      <ScrollToTopOfPage />

      <Container whiteMode={whiteMode} inner="my-20">
        <section className="grid py-10 lg:grid-cols-[30%_33%_33%] gap-[2%] lg:grid-rows-[450px_350px_400px]">
          {businessImages?.map((d, i) => {
            return (
              <figure
                className={`cursor-pointer relative w-full ${arrangement[i]}
                
               `}
                key={i}
                onMouseEnter={() => {
                  setState((prev) => {
                    return { ...prev, selectedData: d };
                  });
                }}
                onMouseLeave={() => {
                  setState((prev) => {
                    return { ...prev, selectedData: {} };
                  });
                }}
              >
                {d?.image ? (
                  <img
                    src={d?.image}
                    alt="pic"
                    className={`${
                      state.selectedData?.id === d?.id && d?.heading
                        ? "opacity-70"
                        : ""
                    } object-contain lg:object-cover w-full h-full rounded-xl`}
                  />
                ) : (
                  <figcaption className=" h-full w-full flex flex-col items-start justify-center p-2">
                    <p
                      className={`text-4xl font-semibold py-3 text-left ${
                        whiteMode ? "text-[#101010]" : "text-[#fff]"
                      }`}
                    >
                      {d?.name}
                    </p>
                    <p
                      className={`text-xl py-3 ${
                        whiteMode ? "text-[#101010]" : "text-[#c1c1c1]"
                      }`}
                    >
                      {d?.description}
                    </p>
                  </figcaption>
                )}
                {state.selectedData?.id === d?.id &&
                  state.selectedData?.heading && (
                    <p className="bg-gradient-to-t from-black to-transparent duration-500 px-4 absolute flex flex-col bottom-0 w-full py-4 font-bold">
                      <span className="py-1 text-sm lg:text-xl bg-gradient-to-r from-pink-500  to-orange-300 bg-clip-text text-transparent">
                        {d?.heading}
                      </span>

                      <span className="py-1 text-xl lg:text-2xl text-[#fff]">
                        {d?.subHeading}
                      </span>
                    </p>
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
