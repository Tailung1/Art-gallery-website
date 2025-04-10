import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/location",
    element: <Location />
  },
  {
    path:"*",
    element: <NotFound />
  }
]);
const  Routes=()=> {
    return <RouterProvider router={router} />;
}
export default Routes;