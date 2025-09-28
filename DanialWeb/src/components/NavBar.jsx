import { Link } from "react-router-dom";
import { useEffect } from "react";
import '../css/NavBar.css';

function NavBar() {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        if (window.scrollY > 40) {
          navbar.classList.add('shrink');
        } else {
          navbar.classList.remove('shrink');
        }
      } else {
        navbar.classList.remove('shrink');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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