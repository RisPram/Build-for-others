import { useRoutes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import ProjectDetails from "./Components/ProjectDetails";
import AboutMe from "./Components/AboutMe";
import Business from "./Components/Business";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
const AllRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/project-details/:key",
      element: <ProjectDetails />,
    },
    {
      path: "/about",
      element: <AboutMe />,
    },
    {
      path: "/business",
      element: <Business />,
    },

    // {
    //   path: "*",
    //   element: <PageNotFound />,
    // },
  ]);

  return (
    <>
      <Header />
      {routes}
      <Footer />
    </>
  );
};
export default AllRoutes;
