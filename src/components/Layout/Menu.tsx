import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className="mb-6">
      <ul className="flex gap-2">
        <li>
          <Link to="/" className="text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/characters" className="text-blue-600">
            Characters
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-blue-600">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-blue-600">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
