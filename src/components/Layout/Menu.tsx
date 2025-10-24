import { Link } from 'react-router-dom';

type MenuItem = {
  path: string;
  label: string;
};

const links: MenuItem[] = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/characters',
    label: 'Characters',
  },
  {
    path: '/products',
    label: 'Products',
  },
  {
    path: '/products/create',
    label: 'Create Product',
  },
  {
    path: '/about',
    label: 'About',
  },
  {
    path: '/contact',
    label: 'Contact',
  },
];

export const Menu = () => {
  return (
    <nav className="mb-6">
      <ul className="flex gap-2">
        {links.map((elem) => (
          <li key={elem.path}>
            <Link to={elem.path} className="text-blue-600">
              {elem.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
