
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Search</Link>
      <Link to="/todos">Todos</Link>
    </nav>
  );
};

export default NavBar;
