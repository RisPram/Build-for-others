import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { iconLink } from "../Assets";
import { businessImages, myProject } from "../Common/RealData";
import Container from "../Common/Container";
const MyProject = ({ whiteMode }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    selectedData: {},
  });
  return (
    <Container whiteMode={whiteMode} inner="pb-20">
      <section className={`grid grid-cols-1 lg:grid-cols-2 mb-14 gap-14`}>
        {businessImages?.map((d, i) => {
          return (
            <figure
              className={`cursor-pointer relative w-full rounded-xl`}
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
              <img
                src={d?.image}
                alt="pic"
                className={`${
                  state.selectedData?.id === d?.id && d?.heading
                    ? "opacity-70"
                    : ""
                } object-contain w-full h-full rounded-xl`}
              />

              {state.selectedData?.id === d?.id &&
                state.selectedData?.heading && (
                  <p className="rounded-xl bg-gradient-to-t from-black to-transparent duration-500 px-4 absolute flex flex-col bottom-0 w-full py-4 font-bold">
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
  );
};

export default MyProject;
