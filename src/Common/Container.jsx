import { useState, useEffect } from "react";
const Container = ({ outer, inner, children, segment }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY; // The number of pixels the document is currently scrolled vertically
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //   console.log("dcd>>", scrollPosition);
  return (
    <section
      className={`relative w-full flex items-center justify-center   ${
        outer ?? ""
      }
 backdrop-blur-none
         ${segment === "header" ? "sticky top-0 z-50" : ""}
    ${
      segment === "header" && scrollPosition >= 50
        ? "bg-transparent backdrop-blur-sm"
        : "bg-black backdrop-blur-none"
    }
    bg-baseColor
     `}
    >
      <section
        className={`w-[90%] md:w-[75%] flex-col bg-transparent ${inner ?? ""}`}
      >
        {children}
      </section>
    </section>
  );
};

export default Container;
