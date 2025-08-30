import {lazy,Suspense} from "react"
import { useRoutes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";

const ProjectDetails =lazy(()=>import("./Components/ProjectDetails")) ;
const AboutMe =lazy(()=>import("./Components/AboutMe"));
const Business = lazy(()=>import("./Components/Business"))

const AllRoutes = ({ whiteMode }) => {
  // console.log("in routes>", whiteMode);
  let routes = useRoutes([
    {
      path: "/",
      element: <LandingPage whiteMode={whiteMode} />,
    },
    {
      path: "/project-details/:key",
      element: <Suspense fallback={<div>Loading..</div>}>
        <ProjectDetails whiteMode={whiteMode} />
      </Suspense>,
    },
    {
      path: "/about",
      element:<Suspense fallback={<div>Loading..</div>}><AboutMe whiteMode={whiteMode} /></Suspense> ,
    },
    {
      path: "/business",
      element:<Suspense fallback={<div>Loading..</div>}><Business whiteMode={whiteMode} /></Suspense> ,
    },

    // {
    //   path: "*",
    //   element: <PageNotFound />,
    // },
  ]);

  return routes;
};
export default AllRoutes;
