import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Abstarct from "./pages/Abstract";
import ErrorPage from "./pages/ErrorPage";
import Algorithm from "./pages/Algorithm";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/algorithm", element: <Algorithm></Algorithm> },
        { path: "/abstract", element: <Abstarct></Abstarct> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
