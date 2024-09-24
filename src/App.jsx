import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Index from ".";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/*" element={<Index />}></Route>)
);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
