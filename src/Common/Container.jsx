const Container = ({ inner, children }) => {
  return (
    <section className={`w-full flex items-center justify-center bg-baseColor`}>
      <section
        className={`w-[90%] md:w-[75%] py-8 flex flex-col bg-baseColor ${
          inner ?? ""
        }`}
      >
        {children}
      </section>
    </section>
  );
};

export default Container;
