const Container = ({ outer, inner, children, segment }) => {
  return (
    <section
      className={`w-full flex items-center justify-center  ${
        outer ?? ""
      } bg-baseColor`}
    >
      <section
        className={`w-[90%] md:w-[75%] flex flex-col  ${inner ?? ""} ${
          segment === "header" ? "bg-baseColor" : "bg-transparent"
        }`}
      >
        {children}
      </section>
    </section>
  );
};

export default Container;
