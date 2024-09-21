import { useState } from "react";
import Container from "../Common/Container";
import { menu } from "../Common/RealData";
import { logo } from "../Assets";
const Header = () => {
  const [state, setState] = useState({
    selectedTab: "menuA",
  });
  return (
    // <div>header</div>
    <Container>
      <nav className="flex w-full h-[60px] sticky top-0 z-50">
        <figure className="w-[10%]">
          <img src={logo} alt="logo" className="object-contain w-full h-full" />
        </figure>
        <section className="w-[90%] flex items-center justify-end">
          <section className=" w-fit bg-[#3a3939] flex p-2 rounded-[30px]">
            {menu?.map((d, i) => {
              return (
                <p
                  key={i}
                  className={`mx-2 first:!ml-0 last:!mr-0 py-2 px-6 rounded-[30px] hover:bg-babyGreen hover:text-gray-600 duration-300 cursor-pointer text-lg font-bold ${
                    state.selectedTab === d?.id
                      ? "bg-babyGreen text-[#101010]"
                      : "text-[#fff]"
                  }`}
                  onClick={() => {
                    setState((prev) => {
                      return { ...prev, selectedTab: d?.id };
                    });
                  }}
                >
                  {d?.title}
                </p>
              );
            })}
          </section>
        </section>
      </nav>
    </Container>
  );
};

export default Header;
