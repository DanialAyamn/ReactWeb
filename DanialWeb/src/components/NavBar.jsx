import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import '../css/NavBar.css';

function NavBar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current) return;
      if (window.innerWidth <= 768) {
        if (window.scrollY > 40) {
          navbarRef.current.classList.add('shrink');
        } else {
          navbarRef.current.classList.remove('shrink');
        }
      } else {
        navbarRef.current.classList.remove('shrink');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
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
export default NavBar;