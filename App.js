import { lazy, Suspense, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./src/components/Error";
import Shimmer from "./src/components/Shimmer";
import Body from "./src/components/Body";
import AppProvider from "./src/components/AppProvider";

// const Body = lazy(() => import("./src/components/Body"));
const About = lazy(() => import("./src/components/About"));
const Contact = lazy(() => import("./src/components/Contact"));
const RestaurantMenu = lazy(() => import("./src/components/RestaurantMenu"));
const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout = () => (

  <AppProvider >
    <div className="app">
      <Header />
      <Outlet />
    </div>
  </AppProvider>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          // <Suspense fallback={<Shimmer />}>
            <Body />
          // </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurant-menu/:resId",
        element: (
          <Suspense fallback={<Shimmer />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
