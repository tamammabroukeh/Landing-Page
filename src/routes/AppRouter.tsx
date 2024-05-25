import { lazy } from "react";
// layouts
const MainLayout = lazy(() => import("../layouts/MainLayout"));
// // error
import Error from "../ui/Error";
// routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SuspenseFallback } from "../app/feedback";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SuspenseFallback>
        <MainLayout />
      </SuspenseFallback>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <SuspenseFallback>{/* <Home /> */}</SuspenseFallback>,
      },
      {
        path: "about-us",
        element: (
          <SuspenseFallback>AboutUs{/* <AboutUs /> */}</SuspenseFallback>
        ),
      },
      {
        path: "login",
        element: <SuspenseFallback>Login{/* <Login /> */}</SuspenseFallback>,
      },
      {
        path: "register",
        element: (
          <SuspenseFallback>
            Register
            {/* <Register /> */}
          </SuspenseFallback>
        ),
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
