import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/packages/:name", element: <DetailsPage /> },
      { path: "/search", element: <SearchPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
