import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CharactersPage } from "./pages/CharactersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/characters",
    element: <CharactersPage />,
  },
]);
