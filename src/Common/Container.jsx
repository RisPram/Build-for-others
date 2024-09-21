const Container = ({ children }) => {
  return (
    <section className={`w-full flex items-center justify-center bg-gray-800`}>
      <section
        className={`w-[90%] md:w-[75%] flex items-center flex-col bg-yellow-50`}
      >
        {children}
      </section>
    </section>
  );
};

export default Container;
