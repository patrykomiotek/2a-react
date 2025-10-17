import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CharactersPage } from './pages/CharactersPage';
import { Layout } from './components/Layout/Layout';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CharacterDetailsPage } from './pages/CharacterDetailsPage';

export const router = createBrowserRouter([
  {
    // path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/characters/:id',
        element: <CharacterDetailsPage />,
      },
      {
        path: '/characters',
        element: <CharactersPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
]);
