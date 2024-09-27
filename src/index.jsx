import { useState } from "react";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import AllRoutes from "./routes";

const Index = () => {
  const [state, setState] = useState({
    whiteMode: false,
  });

  const handleModeChange = (data) => {
    setState((prev) => {
      return { ...prev, whiteMode: data };
    });
  };
  return (
    <>
      <Header handleModeChange={(x) => handleModeChange(x)} />

      <AllRoutes whiteMode={state?.whiteMode} />
      <Footer whiteMode={state?.whiteMode} />
    </>
  );
};

export default Index;
