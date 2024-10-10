const Container = ({ whiteMode, outer, inner, children, style }) => {
  return (
    <section
      className={`relative w-full flex items-center justify-center bg-cover bg-center   ${
        outer ?? ""
      }  ${whiteMode ? "!bg-whiteMode" : "!bg-baseColor"} duration-300`}
      style={style}
    >
      <section
        className={`w-[90%] lg:w-[70%] flex flex-col bg-transparent ${
          inner ?? ""
        }`}
      >
        {children}
      </section>
    </section>
  );
};

export default Container;
