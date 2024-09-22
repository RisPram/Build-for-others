import { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import AllRoutes from "./routes";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/*" element={<AllRoutes />}></Route>)
);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
