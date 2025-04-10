import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";
import NotFound from "./pages/NotFound";
import Footer from "./pages/Footer"; // Import Footer

const router = createBrowserRouter([
  {
    element: (
      <div className='min-h-screen flex flex-col'>
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/location",
        element: <Location />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
