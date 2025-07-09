import "../scss/header.scss";
import logo_black from "../assets/img/CMNP.png";
import logo_white from "../assets/img/CMNP_white.png";
import FramerMotion from "./utills/FramerMotion";
import Container from "./Container";
import { useState, useEffect, useRef } from "react";

const menus = [
  { name: "Company", link: "/company" },
  { name: "Product&Solution", link: "/service" },
  { name: "Support", link: "/support" },
  { name: "Notice", link: "/notice" },
];

const Header = () => {
  const [activated, setActivated] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY > 0;
          setActivated((prev) => (prev !== scrolled ? scrolled : prev));
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHoverStart = () => setActivated(true);
  const handleHoverEnd = () => !window.scrollY && setActivated(false);

  const headerMotion = {
    onHoverStart: handleHoverStart,
    onHoverEnd: handleHoverEnd,
  };

  return (
    <FramerMotion {...headerMotion}>
      <header id="header" className={activated ? "activated" : ""}>
        <Container>
          <a href="/">
            <img
              src={activated ? logo_black : logo_white}
              className="logo"
              alt="logo"
            />
          </a>
          <nav>
            <ul>
              {menus.map((menu, index) => (
                <li key={index}>
                  <a href={menu.link}>{menu.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </header>
    </FramerMotion>
  );
};

export default Header;
