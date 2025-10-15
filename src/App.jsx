import { BrowserRouter, Route, Routes } from "react-router";
import Selfwork from "./views/Selfwork.jsx";
import Posts from "./views/Posts.jsx";
import Layout from "./components/Layout.jsx";
import Detail from "./views/Detail.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Selfwork />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
