import { Link } from "react-router-dom";
import '../css/NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
        <div className="navbar-b">
            <Link to="/">DanialAbuYamn</Link>
        </div>
        <div className="navbar-c">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact Me</Link>
            <Link to="/about">About Me</Link>
        </div>
    </nav>
  );
}
export default NavBar