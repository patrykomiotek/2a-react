import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
      </ul>
    </nav>
  );
};
