import { useEffect } from "react";

const ScrollToTopOfPage = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return;
};

export default ScrollToTopOfPage;
