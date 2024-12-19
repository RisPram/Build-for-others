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

      <Container whiteMode={whiteMode} inner="my-16 lg:my-44">
        <section className="grid !mb-0 py-10 grid-cols-1 grid-rows-auto lg:grid-cols-[30%_33%_33%] lg:gap-[2%]  lg:grid-rows-[450px_350px_400px]">
          {businessImages?.map((d, i) => {
            return (
              <>
                {/* web */}
                <figure
                  className={`hidden lg:block cursor-pointer relative w-full ${arrangement[i]}`}
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
                      } object-contain lg:object-cover w-full h-full rounded-[28px]`}
                    />
                  ) : (
                    <figcaption className=" p-8 h-full w-full flex flex-col items-start justify-center">
                      <p
                        className={`text-5xl font-semibold py-3 text-left ${
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
                      <p className="rounded-[28px] bg-gradient-to-t from-black to-transparent duration-500 p-8 absolute flex flex-col bottom-0 w-full font-bold">
                        <span className="py-1 text-sm lg:text-xl bg-gradient-to-r from-pink-500  to-orange-300 bg-clip-text text-transparent">
                          {d?.heading}
                        </span>

                        <span className="py-1 text-xl lg:text-2xl text-[#fff]">
                          {d?.subHeading}
                        </span>
                      </p>
                    )}
                </figure>
                {/* mobile */}
                <section
                  key={i}
                  className={`lg:hidden flex flex-col rounded-[28px] w-full my-4 bg-gray-100 ${arrangement[i]}`}
                >
                  <figure className={`w-full h-full `}>
                    {d?.image ? (
                      <img
                        src={d?.image}
                        alt="pic"
                        className={`object-contain lg:object-cover w-full h-full
                          ${
                            d?.heading
                              ? "rounded-t-[28px] rounded-b-0"
                              : "rounded-[28px]"
                          }
                          `}
                      />
                    ) : (
                      <figcaption
                        className={`h-full w-full flex flex-col items-start justify-center p-6 md:p-2`}
                      >
                        <p
                          className={`text-3xl md:text-4xl font-semibold py-1 md:py-3 text-left ${
                            whiteMode ? "text-[#101010]" : "text-[#fff]"
                          }`}
                        >
                          {d?.name}
                        </p>
                        <p
                          className={`text-base md:text-xl py-3 ${
                            whiteMode ? "text-[#101010]" : "text-[#c1c1c1]"
                          }`}
                        >
                          {d?.description}
                        </p>
                      </figcaption>
                    )}
                  </figure>
                  {d?.heading && (
                    <section
                      className={`flex items-center justify-center flex-col p-4`}
                    >
                      <h3 className={`py-1 font-bold !text-2xl text-center`}>
                        {d?.heading}
                      </h3>
                      <p
                        className={`py-1 text-sm md:text-base w-full text-gray-700 text-center whitespace-pre-line
                `}
                      >
                        {d?.subHeading}
                      </p>
                    </section>
                  )}
                </section>
              </>
            );
          })}
        </section>
      </Container>
    </>
  );
};

export default Business;
