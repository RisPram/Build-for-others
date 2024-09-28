import { useState, useEffect } from "react";

const Container = ({ whiteMode, outer, inner, children, segment, style }) => {
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

  return (
    <section
      className={`relative w-full flex items-center justify-center bg-cover bg-center   ${
        outer ?? ""
      } ${segment === "header" ? "sticky top-0 z-50" : ""}
      ${
        segment === "header" && scrollPosition >= 50
          ? "bg-transparent backdrop-blur-sm"
          : whiteMode
          ? "bg-whiteMode"
          : "bg-baseColor backdrop-blur-none"
      }duration-300 `}
      style={style}
    >
      <section
        className={`w-[90%] lg:w-[75%] flex  flex-col bg-transparent ${
          inner ?? ""
        }`}
      >
        {children}
      </section>
    </section>
  );
};

export default Container;
