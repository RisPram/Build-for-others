const Container = ({ outer, inner, children, segment }) => {
  return (
    <section
      className={`w-full flex items-center justify-center bg-baseColor  ${
        outer ?? ""
      }
     ${
       segment === "header"
         ? "sticky top-0 z-50 bg-opacity-70 backdrop-blur-sm bg-black"
         : ""
     } 
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
