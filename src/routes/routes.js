import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import AddBlog from "../pages/Dashboard/AddBlog";
import BlockList from "../pages/Dashboard/BlockList";
import About from "../pages/Main/About";
import Cart from "../pages/Main/Cart";
import Home from "../pages/Main/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <BlockList />,
      },
      {
        path: "add-blog",
        element: <AddBlog />,
      },
    ],
  },
]);

export default routes;