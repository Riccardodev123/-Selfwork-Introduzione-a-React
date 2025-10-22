import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout.jsx";
import Selfwork from "../views/Selfwork.jsx";
import Posts from "../views/Posts.jsx";
import Detail from "../views/Detail.jsx";
import { getAllPostsLoader, getSinglePost } from "./loaders.jsx";
import RegisterForm from "../views/RegisterForm.jsx";
import LoginForm from "../views/LoginForm.jsx";
import Tailwind_DaisyUi from "../views/Tailwind_DaisyUi.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Selfwork,
      },
      {
        path: "/posts",
        Component: Posts,
        loader: getAllPostsLoader,
      },
      {
        path: "posts/:id",
        Component: Detail,
        loader: getSinglePost,
      },
      {
        path: "/register",
        Component: RegisterForm,
      },
      {
        path: "/login",
        Component: LoginForm,
      },
      { path: "/tailwind_daisyUI", Component: Tailwind_DaisyUi },
    ],
  },
]);

export default router;
