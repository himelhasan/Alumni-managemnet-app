import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Rakib from "../Pages/TestingPage/Rakib";
import Main from "../../src/layout/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/rakib", element: <Rakib /> },
      {
        path: "/alumni-directory",
        loader: () => {
          return fetch("https://course-data-server.vercel.app/courses");
        },
        element: <ErrorPage></ErrorPage>,
      },

      {
        path: "/alumni/:year",
        loader: ({ params }) => {
          return fetch(`https://course-data-server.vercel.app/${params.year}`);
        },
        element: <ErrorPage></ErrorPage>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

export default routes;
