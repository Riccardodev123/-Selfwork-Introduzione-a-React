// import { BrowserRouter, Route, Routes } from "react-router";
// import Selfwork from "./views/Selfwork.jsx";
// import Posts from "./views/Posts.jsx";
// import Layout from "./components/Layout.jsx";
// import Detail from "./views/Detail.jsx";

import { RouterProvider } from "react-router";
import router from "./router/router";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Selfwork />} />
    //       <Route path="/posts" element={<Posts />} />
    //       <Route path="/posts/:id" element={<Detail />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  );
}

export default App;
