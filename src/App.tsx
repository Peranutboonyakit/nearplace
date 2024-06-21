import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./pages/listPage";
import DetailPage from "./pages/detailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListPage />,
  },
  {
    path: "/:id",
    element: <DetailPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
