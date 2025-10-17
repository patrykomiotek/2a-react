import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CharactersPage } from "./pages/CharactersPage";
import { Layout } from "./components/Layout/Layout";

export const router = createBrowserRouter([
  {
    // path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/characters",
        element: <CharactersPage />,
      },
    ],
  },
]);
